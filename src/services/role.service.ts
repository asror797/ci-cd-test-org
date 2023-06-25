import { CreateRoleDto } from "../dtos/role.dto";
import { IRole } from "../interfaces/role.interface";
import roleModel from "../models/role.model";




class RoleService {
   public roles = roleModel;

   public async getAllRoles():Promise<IRole[]> {
      const roles: IRole[] = await this.roles.find().exec()
      return roles;
   }


   public async getRolePagination(page:number,size:number) {
      const skip = (page-1)*size

      const roles = await this.roles.find()
               .skip(skip)
               .limit(size)
               .exec()
      
      const totalRoles = await this.roles.countDocuments().exec();
      const totalPages = Math.ceil( totalRoles/size)

      return {
         roles,
         currentPage:page,
         totalRoles,
         totalPages,
         rolesOnPage:roles.length
      }

   }

   public async createRole( roleData: CreateRoleDto ) {
      const role = await this.roles.create({
         ...roleData
      })
      
      return role;
   }
}



export default RoleService;