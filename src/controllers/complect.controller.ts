import { NextFunction, Request, Response } from "express";
import ComplectService from "../services/complect.service";
import { createComplectDto } from "../dtos/complect.dto";
import { RequestWithUser } from "../interfaces/auth.interface";




class ComplectController {
    private complectService = new ComplectService();

    public GET = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            res.json(await this.complectService.getAllComplects());
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    public POST = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            const complectData: createComplectDto = req.body;

            res.json(await this.complectService.createComplect(complectData));
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}


export default ComplectController;