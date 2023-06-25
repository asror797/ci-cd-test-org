import { CreateCollectionDto } from "../dtos/collection.dto";
import { HttpException } from "../exceptions/HttpException";
import { IOrderCollection } from "../interfaces/order_collection.interface";
import collectionModel from "../models/collection.model";
import modelModel from "../models/model.model";




class CollectionService {
    public collection = collectionModel;
    public model = modelModel;

    public async getAllCollection() {
        return await this.collection.find();
    }


    public async createCollection(collectionData: CreateCollectionDto) {
        const newCollection: IOrderCollection = await this.collection.create({
            cost: collectionData.cost,
            conf: collectionData.config
        })

        if(!newCollection) throw new HttpException(500,'Something went wrong');

        const addedCollection = await this.model.findByIdAndUpdate(collectionData.model, {$push: { collections: newCollection._id}});

        if(!addedCollection)  throw new HttpException(500,'bad request or something went wrong');

        return newCollection;
    }
}


export default CollectionService;