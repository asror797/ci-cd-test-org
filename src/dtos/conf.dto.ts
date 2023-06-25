import { IsNumber, IsString } from "class-validator";





export class CreateConfDto {

    @IsString()
    name: string 

    @IsNumber()
    cost: number

    @IsString()
    title: string

    @IsNumber()
    running_qty: number

    @IsString()
    model: string
}

