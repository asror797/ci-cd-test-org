import { NextFunction, Request, Response } from "express";
import LegService from "../services/leg.service";
import { RequestWithUser } from "../interfaces/auth.interface";





class LegController {
    public legService = new LegService();

    public GET = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            res.json(await this.legService.getAllLeg());
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    public CREATE = async(req:RequestWithUser,res:Response,next:NextFunction) => {
        try {
            const { name } = req.body;
            res.json(await this.legService.createLeg(name))
        } catch (error) {
            console.log(error)
            next(error);
        }
    }
}

export default LegController;