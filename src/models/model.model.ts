import { Document, Schema, model } from "mongoose";
import { IModel } from "../interfaces/model.interface";





const modelSchema: Schema =  new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price1: {
            type: Number,
            required: true
        },
        price2: {
            type: Number,
            required: true
        },
        sale: {
            type: Number
        },
        seller_percent1: {
            type: Number
        },
        seller_percent2: {
            type: Number
        },
        collections: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Collection'
                }
            ],
            default: []
        },
        type: {
            type: Schema.Types.ObjectId,
            ref: 'Type',
            required: true
        },
        org: {
            type: Schema.Types.ObjectId,
            ref: 'Branch',
            required: true
        }
    },
    {
        timestamps: true
    }
);



const modelModel = model<IModel & Document>('Model',modelSchema);


export default modelModel;