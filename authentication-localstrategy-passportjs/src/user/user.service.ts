import { Injectable } from "@nestjs/common";
import { CONSTANTS } from "src/constants";
import { User } from "./user.entity";


@Injectable()
export class UserService{
    public users:User[]=[
        {
        username:"User1",
        password:"admin",
        email:"username1@gmail.com",
        role: CONSTANTS.ROLE.ANDROID_DEVELOPER
        },
        {
            username:"User2",
            password:"admin",
            email:"username2@gmail.com",
            role: CONSTANTS.ROLE.WEB_DEVELOPER
            },
        {
                username:"User3",
                password:"admin",
                email:"username3@gmail.com",
                role: CONSTANTS.ROLE.ANDROID_DEVELOPER
                },
];


getUserByName(userName:string):User{
    return this.users.find((user:User)=> user.username === userName
    )
}


}