import { NextFunction, Request, Response } from "express";
import TissueService from "../services/tissue.service";
import { CreateTissueDto, UpdateTissueFieldsDto } from "../dtos/tissue.dto";
import { RequestWithUser } from "../interfaces/auth.interface";




class TissueController {
    private tissueService = new TissueService();


    public GET = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            res.json(await this.tissueService.getAllTissue())
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    public CREATE = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            const tissueData: CreateTissueDto= req.body
            res.json(await this.tissueService.createTissue(tissueData));
        } catch (error) {
            console.log(error)
            next(error);
        }
    }

    public UPDATE = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            const tissueData:UpdateTissueFieldsDto = req.body
            res.json(await this.tissueService.updateMany(tissueData));
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}


export default TissueController;