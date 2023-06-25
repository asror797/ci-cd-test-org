import { Schema, model } from "mongoose";
import { IRole } from "../interfaces/role.interface";
import { Document } from "mongoose";



const roleSchema: Schema = new Schema(
   {
      name:String,
      modules: {
         type: [
            {
               uri: String,
               permission: {
                  type: Boolean,
                  default:false
               },
               actions: {
                  type: [
                     {
                        uri: String,
                        permission: {
                           type: Boolean,
                           default:false
                        }
                     }
                  ],
                  default: [],
               }
            }
         ],
         default: []
      }
   },
   {
      timestamps:true
   }
)



const roleModel = model<IRole & Document>('Role',roleSchema);



export default roleModel;