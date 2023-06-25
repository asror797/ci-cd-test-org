import { Router } from "express"
import BranchController from "../controllers/branch.controller";




class BranchRoute {
   public path = '/branch'
   public router = Router();
   public branchController = new BranchController();


   constructor() {
      this.initializeRoutes()
   }

   public initializeRoutes() {
      this.router.get(`${this.path}/all`,this.branchController.GET);
      this.router.get(`${this.path}`,this.branchController.PAGINATION);
      this.router.post(`${this.path}`,this.branchController.CREATE);
   }
}


export default BranchRoute;