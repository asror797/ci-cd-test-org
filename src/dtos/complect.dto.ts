import { Type } from "class-transformer";
import { IsNumber, IsString, ValidateNested } from "class-validator";


export class CollectionsWithQty {
    @IsString()
    collection: string

    @IsNumber()
    quantity: number
}

export class ValidateBody {
    @ValidateNested({ each: true })
    @Type(() => CollectionsWithQty )
    collections: CollectionsWithQty[]
}


export class createComplectDto {
    @IsString()
    tissue: string 

    @IsString()
    leg: string

    @IsString()
    model: string

    @ValidateNested({ each: true })
    @Type(() => CollectionsWithQty )
    collections: CollectionsWithQty[]
}


export class addNewCollectionDto {
    
    @IsString()
    id: string
    
    @IsString()
    collection: string

}