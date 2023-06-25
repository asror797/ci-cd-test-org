import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth.service";
import { LoginDto } from "../dtos/user.dto";
import { RequestWithUser } from "../interfaces/auth.interface";


class AuthController {

   public authService = new AuthService();


   public GET = async(req:RequestWithUser,res:Response,next:NextFunction) => {
      try {
         res.json(await this.authService.login(req.body));
      } catch (error) {
         console.log(error)
         next(error)
      }
   }


   public LOGIN = async(req:RequestWithUser,res:Response,next:NextFunction) => {
      try {
         const userData:LoginDto  =req.body
         res.json({
            message:'succesfull',
            token: await this.authService.login(userData)
         })
      } catch (error) {
         console.log(error)
         next(error)
      }
   }
}

export default AuthController;
