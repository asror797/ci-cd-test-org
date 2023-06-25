import { Document } from "mongoose";
import { IModel } from "./model.interface"



export interface IConfig extends Document {
    name: string;
    cost: number ;
    title: string ;
    running_qty: number;
    model: IModel['_id'];
}