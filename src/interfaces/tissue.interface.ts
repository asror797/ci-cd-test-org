import { Document } from "mongoose";




export interface ITissue extends Document {
   name:string
   cost:number
   price1:number
   price2:number
}