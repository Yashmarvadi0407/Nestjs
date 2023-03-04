import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { BookGuard } from "./book.guard";

    @Controller("book")
export class BookController{

@Get("/findAll")
@UseGuards(new BookGuard())
findAllBooks() :string{
 return " this api will return all books"
}

@Post("add")
addBook():string{
    return "this api will add a book"
}
}