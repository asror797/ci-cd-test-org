import { Router } from "express"
import LegController from "../controllers/leg.controller";




class LegRoute {
    public path = '/leg'
    public router = Router();
    public legController = new LegController();


    constructor() {
        this.initializeRoute();
    }

    public initializeRoute() {
        this.router.get(`${this.path}`,this.legController.GET);
        this.router.post(`${this.path}`,this.legController.CREATE);
    }
}

export default LegRoute;