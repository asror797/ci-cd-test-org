import { Router } from "express";
import CollectionController from "../controllers/collection.controller";




class CollectionRoute {
    public path = '/collection';
    public router = Router();
    public collectionCOntroller = new CollectionController();

    constructor(){
        this.initializeRoute();
    }

    public initializeRoute() {
        this.router.get(`${this.path}`,this.collectionCOntroller.GET);
        this.router.post(`${this.path}`,this.collectionCOntroller.CREATE);
    }
}


export default CollectionRoute;