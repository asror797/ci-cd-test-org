import { IsNumber, IsString } from "class-validator";



export class LoginDto {
   @IsString()
   contact:string

   @IsString()
   password:string
}


export class CreateUserDto {
   @IsNumber()
   contact:number

   @IsString()
   password: string

   @IsString()
   first_name: string

   @IsString()
   last_name: string

   @IsString()
   branch: string

   @IsString()
   role: string
}


export class ResetPasswordDto {
   @IsString()
   id: string

   @IsString()
   password: string
}