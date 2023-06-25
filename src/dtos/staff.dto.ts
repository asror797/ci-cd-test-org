import { IsString } from "class-validator";




export class CreateStaffDto {
    @IsString()
    first_name: string

    @IsString()
    last_name: string

    @IsString()
    org: string
}