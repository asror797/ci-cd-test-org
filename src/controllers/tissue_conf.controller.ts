import { NextFunction, Request, Response } from "express";
import TissueConfSerice from "../services/tissue_conf.service";
import { CreateTissueConfDto } from "../dtos/tissue.dto";
import { RequestWithUser } from "../interfaces/auth.interface";





class TissueConfController {
    private tissueConfService = new TissueConfSerice();


    public GET = async(req:RequestWithUser,res: Response, next: NextFunction) => {
        try {
            res.json(await this.tissueConfService.getAllTissueConf());
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    public CREATE = async(req:RequestWithUser,res: Response, next: NextFunction) => {
        try {
            const confData:CreateTissueConfDto = req.body;
            res.json(await this.tissueConfService.createTissueConf(confData));
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}

export default TissueConfController;