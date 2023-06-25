import { newBranchDto } from "../dtos/branch.dto";
import { HttpException } from "../exceptions/HttpException";
import { IBranch } from "../interfaces/branch.interface";
import branchModel from "../models/branch.model";




class BranchService {
   public branches = branchModel;

   public async getAllBranches():Promise<IBranch[]> {
      const branches = await this.branches.find().exec()
      return branches;
   }

   public async getBranchPagination(page:number, size:number) {

      const skip = (page - 1) * size
      const branches = await this.branches.find()
               .skip(skip)
               .limit(size)
               .exec()
      
      const totalBranches = await this.branches.countDocuments().exec();
      const totalPages = Math.ceil(totalBranches/size);

      return {
         branches,
         currentPage:page,
         totalPages,
         totalBranches,
         branchesOnPage: branches.length
      }

   }

   public async createBranch(branchData:newBranchDto):Promise<IBranch> {
      const newBranch: IBranch = await this.branches.create({...branchData})
      return newBranch;
   }

   public async getById( id: string ):Promise<IBranch> {
      const branch = await this.branches.findOne({ _id: id });

      if(!branch) throw new HttpException(400,'branch not found');

      return branch;
   }
}



export default BranchService;