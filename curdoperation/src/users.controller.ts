import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";



// create array for store data

let USERS=[]

@Controller("/User")
 export class UserController{
 @Post()
 addUser(@Body() createUserDto:CreateUserDTO){
USERS.push(createUserDto)
    return"user added"
 }

@Get()
getUsers(){
    return USERS
}

@Get(":id")
getUser(@Param("id") id:number){
    return USERS.find((User) => +User.id == +id)
}

@Put(":id")
updateUser(@Param("id") id:number, @Body() updateUserDTO:CreateUserDTO){
    const useridx=USERS.findIndex((user) => +user.id== +id);

    if(!useridx){
        return;

    }

    USERS[useridx]= updateUserDTO
}

@Delete(":id")
deleteUser(@Param("id") id:number){
     return USERS.filter((User) => +User.id=== +id);

    
    
}


}