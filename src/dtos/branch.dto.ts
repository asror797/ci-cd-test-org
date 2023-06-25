import { IsEnum, IsOptional, IsString } from "class-validator";
import { OrgType } from "../interfaces/branch.interface";


export class newBranchDto {

   @IsString()
   name: string

   @IsOptional()
   @IsEnum(OrgType)
   branch_type: string
}

