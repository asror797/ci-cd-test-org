import { NextFunction, Request, Response } from "express";
import UserService from "../services/user.service";
import { CreateUserDto, ResetPasswordDto } from "../dtos/user.dto";
import { ParsedQs } from "qs";
import { RequestWithUser } from "../interfaces/auth.interface";




class UserController {
   public userService = new UserService();

   public GET = async(req:RequestWithUser,res:Response,next:NextFunction) => {
      try { 
         res.json(await this.userService.getAllUsers())
      } catch (error) {
         console.log(error);
      }
   }

   public PAGINATION = async(req:RequestWithUser<ParsedQs>,res:Response,next:NextFunction) => {
      try {
         const page = parseInt(req.query.page as string) || 1;
         const size = parseInt(req.query.size as string) || 5;

         res.json(await this.userService.getUserPagination(page,size));
      } catch (error) {
         console.log(error)
         next(error);
      }
   }

   public CREATE = async(req:RequestWithUser,res:Response,next:NextFunction) => {
      try {
         const userData:CreateUserDto = req.body;

         res.json(await this.userService.createNewUser(userData));
      } catch (error) {
         console.log('ok')
         console.log(error)
         next(error);
      }
   }

   public RESET_PASSWORD = async(req:RequestWithUser,res:Response,next:NextFunction) => {
      try {
         const userData: ResetPasswordDto = req.body;
         res.json(await this.userService.resetPassword(userData));
      } catch (error) {
         console.log(error),
         next(error);
      }
   }
}


export default UserController;