import { Document, Schema, model } from "mongoose";
import { ITissueConf } from "../interfaces/tissue_conf.interface";




const tissueConfSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        hex_color: {
            type: String,
            required: true
        },
        tissue: {
            type: Schema.Types.ObjectId,
            ref:'Tissue',
            required: true
        }
    },
    {
        timestamps: true
    }
);

const tissueConfModel = model<ITissueConf & Document>('TissueConf',tissueConfSchema);

export default tissueConfModel;