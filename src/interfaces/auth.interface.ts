import { Request } from "express";
import { IUser } from "./user.interface";


// export interface RequestWithUser extends Request {
//     user?: IUser
// }

export interface RequestWithUser<T = any> extends Request<T> {
    user?: IUser;
}