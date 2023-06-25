import { Router } from "express"
import AuthController from "../controllers/auth.controller";




class AuthRoute {
   public path = '/auth'
   public router = Router();
   public authController = new AuthController();

   constructor() {
      this.initializeRoutes()
   }


   initializeRoutes() {
      this.router.post(`${this.path}/login`,this.authController.LOGIN);
   }
}


export default AuthRoute;