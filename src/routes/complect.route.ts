import { Router } from "express"
import ComplectController from "../controllers/complect.controller"




class ComplectRoute {
    public path = '/complect'
    public router = Router()
    public complectController = new ComplectController()


    constructor() {
        this.initializeRoute();
    }

    public initializeRoute() {
        this.router.get(`${this.path}`,this.complectController.GET);
        this.router.post(`${this.path}`,this.complectController.POST);
    }
}

export default ComplectRoute;