import { IsNumber, IsString } from "class-validator";



export class CreateTissueDto {
    @IsString()
    name: string

    @IsNumber()
    cost: number

    @IsNumber()
    price1: number

    @IsNumber()
    price2: number
}



export class CreateTissueConfDto {
    @IsString()
    name: string

    @IsString()
    color: string 

    @IsString()
    hex_color: string 

    @IsString()
    tissue: string
}




export class UpdateTissueConfDto {
    @IsString()
    id:string

    @IsString()
    color: string

    @IsString()
    hex_color:string 
}



export class UpdateTissueFieldsDto {
    @IsString()
    id: string

    @IsString()
    name: string 
    
    @IsNumber()
    cost: number 

    @IsNumber()
    price1: number 

    @IsNumber()
    price2: number
}