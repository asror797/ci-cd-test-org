import { Document, Schema, model } from "mongoose";
import { IStaff } from "../interfaces/staff.interface";


const staffSchema: Schema = new Schema(
   {
      first_name: String,
      last_name: String,
      org: {
         type: Schema.Types.ObjectId,
         ref:'Branch',
         required:true
      }
   },
   {
      timestamps: true
   }
)



const staffModel = model<IStaff & Document>('Staff',staffSchema)


export default staffModel;