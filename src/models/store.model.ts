import { Schema } from "mongoose";






const storeSchema: Schema = new Schema(
    {   
        products:[
            {
                product:'',
                quantity:''
            }
        ],
        branch:''
    },
    {
        timestamps: true
    }
)


// export default new storeSchema();