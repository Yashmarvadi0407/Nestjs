import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/user.entity";



@Injectable()
export class AuthService{
    constructor(private jwtService:JwtService){

    }
    //id card
    generateToken(paylod:User) : string{
        return this.jwtService.sign(paylod)
    }
}