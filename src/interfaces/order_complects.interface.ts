import { ILeg } from "./leg.interface";
import { IModel } from "./model.interface";
import { IOrderCollection } from "./order_collection.interface";
import { ITissueConf } from "./tissue_conf.interface"


export interface IOrderComplects {
    is_accepted: boolean;
    leg: ILeg['_id'];
    tissue: ITissueConf['_id'];
    model: IModel['_id'];
    collection: [
        {
            collection:IOrderCollection['_id'],
            quantity: number
        }
    ];
}