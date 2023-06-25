import { Schema, model } from "mongoose";
import { IBranch, OrgType } from "../interfaces/branch.interface";



const branchSchema: Schema = new Schema(
   {
      name: {
         type: String,
         required: true
      },
      branch_type: {
         type: String,
         enum:OrgType,
         required: true
      }
   }
)


const branchModel = model<IBranch & Document>('Branch',branchSchema);




export default branchModel;