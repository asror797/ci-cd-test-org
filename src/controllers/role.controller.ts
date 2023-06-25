import { NextFunction, Request, Response } from "express";
import RoleService from "../services/role.service";
import { CreateRoleDto } from "../dtos/role.dto";
import { ParsedQs } from "qs";
import { RequestWithUser } from "../interfaces/auth.interface";



class RoleController {
   public roleService = new RoleService();


   public GET = async(req:RequestWithUser,res:Response,next:NextFunction) => {
      try {
         res.json(await this.roleService.getAllRoles());
      } catch (error) {
         console.log(error)
      }
   }

   public PAGINATION = async(req:RequestWithUser<ParsedQs>,res:Response,next:NextFunction) => {
      try {
         const page = parseInt(req.query.page as string) || 1;
         const size = parseInt(req.query.size as string) || 5;

         res.json(await this.roleService.getRolePagination(page,size));
      } catch (error) {
         console.log(error)
         next(error);
      }
   }

   public CREATE = async(req:Request,res:Response,next:NextFunction) => {
      try {
         const roleData: CreateRoleDto = req.body;
         res.json(await this.roleService.createRole(roleData));
      } catch (error) {
         console.log(error)
         next(error);
      }
   }
}



export default RoleController;