import { IsString } from "class-validator";





export class CreateFTypeDto {
    @IsString()
    name:string
}