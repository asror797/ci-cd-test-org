import { NextFunction, Request, Response } from "express";
import FTypeService from "../services/ftype.service";
import { CreateFTypeDto } from "../dtos/ftype.dto";
import { RequestWithUser } from "../interfaces/auth.interface";




class FTypeController {
   public ftypeService = new FTypeService();


   public GET = async(req:RequestWithUser,res:Response,next:NextFunction) => {
      try {
         res.json(await this.ftypeService.getAllTypes());
      } catch (error) {
         console.log(error)
         next(error)  
      }
   }


   public CREATE = async(req:RequestWithUser,res:Response,next:NextFunction) => {
      try {
         const typeData:CreateFTypeDto = req.body

         res.json(await this.ftypeService.createFType(typeData));
      } catch (error) {
         console.log(error)
         next(error)
      }
   }
}

export default FTypeController;