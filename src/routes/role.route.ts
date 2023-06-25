import { Router } from "express";
import RoleController from "../controllers/role.controller";




class RoleRoute {
   public path = '/role';
   public router = Router();
   public roleController = new RoleController();


   constructor() {
      this.initializeRoutes();
   }

   public initializeRoutes() {
      this.router.get(`${this.path}/all`,this.roleController.GET);
      this.router.get(`${this.path}`,this.roleController.PAGINATION);
      this.router.post(`${this.path}`,this.roleController.CREATE);
   }
}


export default RoleRoute;