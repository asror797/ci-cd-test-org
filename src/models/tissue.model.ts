import { Document, Schema, model } from "mongoose";
import { ITissue } from "../interfaces/tissue.interface";




const tissueSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        cost: {
            type: Number,
            required: true
        },
        price1: {
            type: Number,
            required:true
        },
        price2: {
            type: Number,
            required:true
        }
    },
    {
        timestamps: true
    }
);


const tissueModel = model<ITissue & Document>('Tissue',tissueSchema);


export default tissueModel;