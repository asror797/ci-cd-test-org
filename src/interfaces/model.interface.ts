import { Document } from "mongoose";
import { IType } from "./type.interface";
import { IOrderCollection } from "./order_collection.interface";
import { IBranch } from "./branch.interface";




export interface IModel extends Document {
   name: string;
   price1:number;
   price2:number;
   price3:number;
   sale:number;
   seller_percent1:number;
   seller_percent2:number;
   type: IType['_id'];
   org: IBranch['_id'];
   collections: IOrderCollection[];
}