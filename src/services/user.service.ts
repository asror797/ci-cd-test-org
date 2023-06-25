import { CreateUserDto, ResetPasswordDto } from "../dtos/user.dto";
import { HttpException } from "../exceptions/HttpException";
import userModel from "../models/user.model";
import BranchService from "./branch.service";
import staffModel from "../models/staff.model";
import { hash } from "bcrypt";
import { IUser } from "../interfaces/user.interface";




class UserService {
   public users = userModel;
   public staff = staffModel;
   public branchService = new BranchService();


   public async getAllUsers() {
      return await this.users.find().populate('staff role').exec()
   }


   public async getUserPagination( page:number , size:number ) {
      const skip = (page - 1) * size;

      const users = await this.users.find()
               .skip(skip)
               .limit(size)
               .populate('role staff')
               .exec();

      const totalUsers = await this.users.countDocuments().exec()
      const totalPages = Math.ceil(totalUsers/size)


      return {
         users,
         currentPage:page,
         totalPages,
         totalUsers,
         usersOnPage: users.length
      }
   }

   // Porto Riko  @portoriko6080 

   public async createNewUser(userData:CreateUserDto) {

      const user = await this.users.findOne({ phone_number: userData.contact });

      const org = await this.branchService.getById(userData.branch);

      if(user) throw new HttpException(400,'user already created');


      const staff = await this.staff.create({
         first_name: userData.first_name,
         last_name: userData.last_name,
         org:org['_id']
      })

      const hashedPassword = await hash( userData.password, 10);

      if(!staff) throw new HttpException(400,'something went wrong');

      const newUser = await this.users.create({
         role: userData.role,
         staff: staff['_id'],
         phone_number: userData.contact,
         password: hashedPassword
      })

      return newUser;

   }

   public async resetPassword(userData:ResetPasswordDto) {

      const hashedPwd = await hash( userData.password, 10);

      const updatedUser = await this.users.findOneAndUpdate(
         {
            _id: userData.id
         },
         {
            password: hashedPwd
         },
         {
            new: true
         }
      );

      return updatedUser;
      }

   
}


export default UserService;