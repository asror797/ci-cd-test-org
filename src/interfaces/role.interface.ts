import { Document } from "mongoose";




export interface IAction extends Document {
   uri: string;
   permission: boolean;
}

export interface IModule extends Document {
   uri: string;
   permission: boolean;
   actions: IAction[];
}

export interface IRole extends Document {
   name: string;
   modules: IModule[];
}