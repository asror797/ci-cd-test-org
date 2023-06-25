import { Document } from "mongoose";
import { ITissue } from "./tissue.interface";


export interface ITissueConf extends Document {
    name: string;
    color: string;
    hex_color: string;
    tissue: ITissue['_id'];
}
