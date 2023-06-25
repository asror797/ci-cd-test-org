import { NextFunction, Request, Response } from "express";
import BranchService from "../services/branch.service";
import { newBranchDto } from "../dtos/branch.dto";
import { ParsedQs } from "qs";
import { RequestWithUser } from "../interfaces/auth.interface";


class BranchController {
   public branchService = new BranchService();

   public GET = async(req:RequestWithUser,res:Response,next:NextFunction) => {
      try {
         res.json(await this.branchService.getAllBranches())
      } catch (error) {
         console.log(error)
      }
   }

   public PAGINATION = async(req:RequestWithUser<ParsedQs>,res:Response,next:NextFunction) => {
      try {
         const page = parseInt(req.query.page as string) || 1;
         const size = parseInt(req.query.size as string) || 5;

         res.json(await this.branchService.getBranchPagination(page,size));
      } catch (error) {
         console.log(error)
         next(error)
      }
   }

   public CREATE = async(req:RequestWithUser,res:Response,next:NextFunction) => {
      try {
         const branchData:newBranchDto = req.body;
         res.json(await this.branchService.createBranch(branchData))
      } catch (error) {
         console.log(error)
      }
   }
}


export default BranchController;
