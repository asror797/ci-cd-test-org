import { Document } from "mongoose"
import { IBranch } from "./branch.interface"
import { IOrderComplects } from "./order_complects.interface"
import { IUser } from "./user.interface"


export interface IOrder extends Document {
    delivery_date: string
    seller: IUser['_id']
    org: IBranch['_id']
    status: Status
    complects: IOrderComplects[]
}


export enum Status {
    draft = 'draft',
    new = 'new',
    accepted = 'accepted',
    stored = 'stored',
}