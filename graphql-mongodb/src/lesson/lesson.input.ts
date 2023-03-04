import { Field, InputType } from "@nestjs/graphql";
import { isDateString, IsDateString, MinLength } from "class-validator";

@InputType()
export class createlessonInput{
@MinLength(1)
@Field()
name:string;
@IsDateString()
@Field()
startDate:string;
@IsDateString()
@Field()
endDate:string;




}