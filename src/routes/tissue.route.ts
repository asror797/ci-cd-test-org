import { Router } from "express";
import TissueController from "../controllers/tissue.controller";
import TissueConfController from "../controllers/tissue_conf.controller";
import authMiddleware from "../middlewares/auth.middleware";




class TissueRoute {
    public path = '/tissue';
    public router = Router()
    public tissueController = new TissueController();
    public tissueConfController = new TissueConfController();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        // Tissue Route
        this.router.get(`${this.path}`,authMiddleware,this.tissueController.GET);
        this.router.post(`${this.path}`,this.tissueController.CREATE);
        this.router.put(`${this.path}`,this.tissueController.UPDATE);

        // TissueConf Route
        this.router.get(`${this.path}/conf`,this.tissueConfController.GET);
        this.router.post(`${this.path}/conf`,this.tissueConfController.CREATE);
    }
}


export default TissueRoute;