import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Module from 'module';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './schema/Book';

@Injectable()
export class BookService {

 constructor(@InjectModel(Book.name) private bookModule:Model<BookDocument>){

 }





  create(createBookDto: CreateBookDto) :Promise<Book>{
    const model=new this.bookModule();
    model.title=createBookDto.title;
    model.author=createBookDto.author;

    model.published=createBookDto.published
    return model.save()
  }

  findAll():Promise<Book[]> {
    return this.bookModule.find().exec()
  }

  findOne(id: number) :Promise<Book>{
    return this.bookModule.findById(id).exec()
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookModule.updateOne({_id:id},
      {
        title:updateBookDto.title,
        author:updateBookDto.author,
        published:updateBookDto.published
      }).exec()
  }

  remove(id: string) {
    return this.bookModule.deleteOne({_id:id}).exec()
  }
}
