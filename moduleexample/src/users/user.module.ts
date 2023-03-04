import { Module } from "@nestjs/common";



@Module({
    imports:[],
    controllers:[UserController,Accountontroller],
    providers:[UsersServices],
    export:[UsersServices],
})
 export class UserModule{

}