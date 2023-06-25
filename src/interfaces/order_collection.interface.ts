import { Document } from "mongoose";
import { IConfig } from "./config.interface";



export interface IOrderCollection extends Document {
    cost: number;
    conf: IConfig['_id'];
}