import { Router } from "express";
import ModelController from "../controllers/model.controller";




class ModelRoute {
    public path = '/model';
    public router = Router();
    public modelController = new ModelController();


    constructor() {
        this.initilializeRoutes()
    }

    public initilializeRoutes() {
        this.router.get(`${this.path}`,this.modelController.GET);
        this.router.get(`${this.path}/type`,this.modelController.GET_BY_TYPE)
        this.router.post(`${this.path}`,this.modelController.CREATE);
    }
}


export default ModelRoute;