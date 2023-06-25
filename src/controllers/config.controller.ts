import { NextFunction, Request, Response } from "express";
import ConfigService from "../services/config.service";
import { CreateConfDto } from "../dtos/conf.dto";
import { RequestWithUser } from "../interfaces/auth.interface";



class ConfigController {
    public configService = new ConfigService();

    public GET = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            res.json(await this.configService.getAllConfigs())
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    public CREATE = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            const confData: CreateConfDto = req.body
            res.json(await this.configService.createNewConf(confData));
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}


export default ConfigController;