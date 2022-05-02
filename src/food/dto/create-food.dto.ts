import {IsEmail} from "class-validator"

export class CreateFoodDto {

    @IsEmail()
    email : string

    item? : Object
}