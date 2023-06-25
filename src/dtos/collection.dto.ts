import { IsNumber, IsString } from "class-validator";



export class CreateCollectionDto {
    
    @IsNumber()
    cost: number

    @IsString()
    config: string


    @IsString()
    model: string
}