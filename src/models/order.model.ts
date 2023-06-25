import { Schema, model } from "mongoose";
import { IOrder, Status } from "../interfaces/order.interface";



const orderSchema: Schema = new Schema(
    {
        delivery_date: {
            type: String,
            required: true
        },
        seller: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        company: {
            type: Schema.Types.ObjectId,
            ref: 'Branch',
            required: true
        },
        status: {
            type: String,
            enum: Status,
            required: true
        },
        complects: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Complect'
                }
            ],
            default:[]
        }
    },
    {
        timestamps: true
    }
);


const orderModel = model<IOrder & Document>('Order',orderSchema);

export default orderModel;