import { NextFunction, Request, Response } from "express";
import ModelService from "../services/model.service";
import { CreateModelDto } from "../dtos/model.dto";
import { ParsedQs } from "qs";
import { RequestWithUser } from "../interfaces/auth.interface";




class ModelController {
    public modelService = new ModelService();


    public GET = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            res.json(await this.modelService.getAllModels());
        } catch (error) {
            console.log(error)
            next(error);
        }
    }

    public GET_BY_TYPE = async(req:RequestWithUser<ParsedQs>,res:Response,next:NextFunction) => {
        try {
            const ftype: string = req.query.type as string ;

            console.log('type',ftype)

            res.json(await this.modelService.getByType(ftype));
        } catch (error) {
            console.log(error)
            next(error)
        }
    }


    public CREATE = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            const modelData:CreateModelDto = req.body;

            res.json(await this.modelService.createModel(modelData))
        } catch (error) {
            console.log(error)
            next(error);
        }
    }

}



export default ModelController;