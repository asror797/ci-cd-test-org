import { Document, Schema, model } from "mongoose";
import { IType } from "../interfaces/type.interface";




const typeSchema: Schema = new Schema(
   {
      name: {
         type: String,
         required: true
      }
   },
   {
      timestamps: true
   }
)



const ftypeModel = model<IType & Document>('Type',typeSchema);


export default ftypeModel;