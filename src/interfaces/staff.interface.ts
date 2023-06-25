import { Document } from "mongoose";
import { IBranch } from "./branch.interface";

export interface IStaff extends Document {
   first_name: string,
   last_name: string,
   org:IBranch['_id']
}