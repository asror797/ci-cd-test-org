import { IsArray, IsEnum, IsOptional, IsString, ValidateNested, isString } from "class-validator";
import { Type } from "class-transformer";
import { Status } from "../interfaces/order.interface";

export class Complect {
    @IsString()
    complect: string
}

export class CreateOrderDto {

    @IsString()
    delivery_date: string

    @IsString()
    seller: string 

    @IsString()
    company: string

    @IsOptional()
    @IsEnum(Status)
    status: string

    // @ValidateNested({ each: true })
    // @Type(() => Complect)
    @IsArray()
    comlpects: string[]
}

