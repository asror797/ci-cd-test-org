import { Document } from "mongoose";
import { IStaff } from "./staff.interface";
import { IRole } from "./role.interface";


export interface IUser extends Document {
   phone_number:string,
   password:string,
   is_deleted:boolean,
   is_active:boolean,
   staff:IStaff['_id']
   role:IRole['_id']
}


