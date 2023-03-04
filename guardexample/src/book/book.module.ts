import { Module } from '@nestjs/common';
import { BookController } from './book.controler';
//import { BookControler} from './book.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [ ],
})
export class BookModule {}
