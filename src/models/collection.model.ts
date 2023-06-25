import { Document, Schema, model } from "mongoose";
import { IOrderCollection } from "../interfaces/order_collection.interface";




const collectionSchema: Schema = new Schema(
    {
        cost: {
            type: Number,
            required: true
        },
        conf: {
            type: Schema.Types.ObjectId,
            ref: 'Config',
            required: true
        }
    },
    {
        timestamps: true
    }
);


const collectionModel = model<IOrderCollection & Document>('Collection',collectionSchema);


export default collectionModel;