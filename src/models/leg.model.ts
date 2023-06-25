import { Document, Schema, model } from "mongoose";
import { ILeg } from "../interfaces/leg.interface";





const LegSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const legModel = model<ILeg & Document>('Leg',LegSchema);


export default legModel;