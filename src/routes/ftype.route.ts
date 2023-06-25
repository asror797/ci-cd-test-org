import { Router } from "express";
import FTypeController from "../controllers/type.controller";





class FTypeRoute {
   public path = '/type';
   public router = Router();
   public ftypeController = new FTypeController();


   constructor() {
      this.initializeRoutes()
   }

   initializeRoutes() {
      this.router.get(`${this.path}`,this.ftypeController.GET);
      this.router.post(`${this.path}`,this.ftypeController.CREATE);
   }
}


export default FTypeRoute;