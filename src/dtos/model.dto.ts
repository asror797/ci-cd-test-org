import { IsDecimal, IsNumber, IsString } from "class-validator";




export class CreateModelDto {
    @IsString()
    
    name: string

    @IsNumber()
    price1: number

    @IsNumber()
    price2: number

    @IsNumber()
    sale: number

    @IsDecimal()
    seller_persent1: number

    @IsDecimal()
    seller_persent2: number

    @IsString()
    type: string

    @IsString()
    org: string

}




export class AddCollectionDto {
    @IsString()
    id: string

    @IsString()
    conf: string
}