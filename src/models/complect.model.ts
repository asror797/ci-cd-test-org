import { Document, Schema, model } from "mongoose";
import { IOrderComplects } from "../interfaces/order_complects.interface";




const complectSchema: Schema = new Schema(
    {
        is_accepted: {
            type: Boolean,
            default: false
        },
        leg: {
            type: Schema.Types.ObjectId,
            ref: 'Leg',
            required: true
        },
        tissue: {
            type: Schema.Types.ObjectId,
            ref:' TissueConf',
            required: true
        },
        model: {
            type: Schema.Types.ObjectId,
            ref:' Model',
            required: true
        },
        collections: {
            type: [
                {
                    collection: {
                        type: Schema.Types.ObjectId,
                        ref: 'Collection',
                        required: true
                    },
                    quantity: {
                        type: Number,
                        required: true
                    }
                }
            ],
            default: []
        }
    },
    {
        timestamps:true
    }
);


const complectModel = model<IOrderComplects & Document>('Complect',complectSchema);

export default complectModel;