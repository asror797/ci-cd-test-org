import { NextFunction, Response } from "express";
import { HttpException } from "../exceptions/HttpException";
import { RequestWithUser } from "../interfaces/auth.interface";
import { verify } from "jsonwebtoken";
import userModel from "../models/user.model";




const authMiddleware = async(req:RequestWithUser,res:Response,next:NextFunction) => {

    try {
        const Authorization = req.header('Authorization')?.split('Bearer ')[1] 

        console.log(Authorization)
        const url = req.url

        console.log(url)

        if(url === '/') return res.json({ message:"Salam alaykum",status:200});

        if(url === '/auth/login' || url === '/api-docs') {
            return next();
        }else {
            if(Authorization) {
                const secretKey: string = 'SECRET_KEY';
                const verificationResponse = verify(Authorization, secretKey) as any 
                console.log('VerificationResponse', verificationResponse);
    
                const userID = verificationResponse['_id'];
                const findUser = await userModel.findById(userID);
                // async function for this 
    
                if(findUser) {
                    req.user = findUser
                    next()
                } else {
                    next( new HttpException(401,'Wrong authenticaton token'))
                }
            } else {
                next(new HttpException(401,'Wrong authentication token'));
            }
        }

        
        
    } catch (error) {
        console.log(error)
        next(new HttpException(401,'Wrong authintication token'))
    }
}


export default authMiddleware;