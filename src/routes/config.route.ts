import { Router } from "express";
import ConfigController from "../controllers/config.controller";



class ConfigRoute {
    public path = '/conf'
    public router = Router()
    public confController = new ConfigController();


    constructor() {
        this.initializeRoutes();
    }


    private initializeRoutes() {
        this.router.get(`${this.path}`,this.confController.GET);
        this.router.post(`${this.path}`,this.confController.CREATE);
    }
}


export default ConfigRoute;