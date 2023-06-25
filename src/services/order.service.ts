import { CreateOrderDto } from "../dtos/order.dto";
import orderModel from "../models/order.model";


class OrderService {
    private order = orderModel; 

    // GET ALL ORDER
    // public async getAllOrder() {
    //     return await this.order.find().populate('complects complects.collections').exec()
    // }

    // public async getAllOrder() {
    //     return await this.order.find().populate({
    //       path: 'complects',
    //       populate: {
    //         path: 'collections.collection',
    //         model: 'Collection'
    //       }
    //     }).exec();
    // }

    public async getAllOrder() {
        return await this.order.find().populate({
          path: 'complects',
          populate: [
            { path: 'collections.collection', model: 'Collection' },
            { path: 'leg', model: 'Leg' },
            { path: 'tissue', model: 'Tissue' },
            { path: 'model', model: 'Model' },
            { path: 'collections.collection.config', model: 'Config' }
          ]
        }).exec();
      }
    
    // GET COUNT OF ORDER
    public async countOfOrder() {
        return { count: await this.order.countDocuments().exec() };
    }
    
    public getOrderOfToday() {

    }

    public async newOrder(orderData:CreateOrderDto) {
        const newOrder =  await this.order.create({
            ...orderData
        })

        return newOrder;
    }

}

export default OrderService;