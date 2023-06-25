import { CreateFTypeDto } from "../dtos/ftype.dto";
import { IType } from "../interfaces/type.interface";
import ftypeModel from "../models/ftype.model";






class FTypeService {
   public type = ftypeModel;

   public async getAllTypes():Promise<IType[]> {
      return await this.type.find().exec();
   }


   public async createFType(ftypeData:CreateFTypeDto):Promise<IType> {
      const newFType = await this.type.create({
         ...ftypeData
      })
      return newFType;
   }
} 


export default FTypeService;