import { NextFunction, Request, Response } from "express";
import CollectionService from "../services/collection.service";
import { CreateCollectionDto } from "../dtos/collection.dto";
import { RequestWithUser } from "../interfaces/auth.interface";


class CollectionController {
    private collectionService = new CollectionService();


    public GET = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            res.json(await this.collectionService.getAllCollection());
        } catch (error) {
            console.log(error)
            next(error)
        }
    }


    public CREATE = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            const collectionData: CreateCollectionDto = req.body;
            res.json(await this.collectionService.createCollection(collectionData));
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}



export default CollectionController;