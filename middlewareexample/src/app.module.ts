import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './users/user.module';


@Module({
  imports: [UserModule,BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
