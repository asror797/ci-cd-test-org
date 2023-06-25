import { Schema, model } from "mongoose";
import { IConfig } from "../interfaces/config.interface";



const configSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        cost: {
            type: Number,
            default: 0
        },
        title: {
            type: String
        },
        running_qty: {
            type: Number,
        },
        model: {
            type: Schema.Types.ObjectId,
            ref:'Model',
            required: true
        }
    },
    {
        timestamps: true
    }
)


const configModel = model<IConfig & Document>('Config',configSchema)

export default configModel;