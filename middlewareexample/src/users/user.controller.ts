import { Controller, Get, Post } from "@nestjs/common";


@Controller("users")
export class UserController{

@Get()
findAllBooks() :string{
 return " this api will return all books"
}

@Post()
addBook():string{
    return "this api will add a book"
}
}