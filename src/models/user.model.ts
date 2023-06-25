import { Document, Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";



const userSchema: Schema = new Schema(
   {
      phone_number: {
         type: String,
         unique:true,
         required: true
      },
      password: {
         type: String,
         required: true
      },
      is_active: {
         type: Boolean,
         default: true
      },
      is_deleted: {
         type: Boolean,
         default: false
      },
      role: {
         type: Schema.Types.ObjectId,
         ref:'Role',
         required: true
      },
      staff: {
         type: Schema.Types.ObjectId,
         ref:'Staff',
         required: true
      }

   },
   {
      timestamps:true
   }
)


const userModel = model<IUser & Document>('User',userSchema)


export default userModel;