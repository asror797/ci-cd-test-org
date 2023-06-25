import { Document } from "mongoose";



export interface IBranch extends Document {
   name: string,
   branch_type: OrgType
}

export enum OrgType {
   factory = "factory",
   supplier = "supplier",
   showroom = "showroom"
}