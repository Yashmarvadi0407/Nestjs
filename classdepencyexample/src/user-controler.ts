import { Controller } from "@nestjs/common";

import { UserStore } from "./user-store";


@Controller("/users")
export class UserController{
    constructor(private store:UserStore){
        
        console.log(store);
        

    }
}