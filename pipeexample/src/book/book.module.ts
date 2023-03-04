import { Module } from '@nestjs/common';
import { BookControler} from './book.controller';

@Module({
  imports: [],
  controllers: [BookControler],
  providers: [ ],
})
export class BookModule {}
