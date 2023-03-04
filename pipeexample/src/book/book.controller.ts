import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { BookDto } from "./dto/book.dto";
import { BookPipe } from "./pipes/book.pipe";

@Controller("book")
export class BookControler{

@Get("/:id")
findBookById(@Param("id",ParseIntPipe) id: number):string{
    console.log(id,typeof(id));
    
    
    return "Book by id "
    
}
@Post("/add")
addBook(@Body(new BookPipe()) book:BookDto):string{

    return "added book "
    
}

}