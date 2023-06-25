import { Router } from "express"
import OrderController from "../controllers/order.controller"


class OrderRoute {
    public path = '/order'
    public router = Router()
    public orderController = new OrderController();

    constructor() {
        this.initializeRoute();
    }

    public initializeRoute() {
        this.router.get(`${this.path}`,this.orderController.GET);
        this.router.post(`${this.path}`,this.orderController.CREATE);
    }
}

export default OrderRoute;
