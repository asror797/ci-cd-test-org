import { NextFunction, Request, Response } from "express";
import OrderService from "../services/order.service";
import { CreateOrderDto } from "../dtos/order.dto";
import { RequestWithUser } from "../interfaces/auth.interface";


class OrderController {
    private orderService = new OrderService();

    public GET = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            res.json(await this.orderService.getAllOrder());
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    public GET_ORDER_BY_DATE = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    public CREATE = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            const orderData:CreateOrderDto = req.body;
            res.json(await this.orderService.newOrder(orderData));
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}

export default OrderController;
