import { Module } from '@nestjs/common';
import { UserController } from './user-controler';
import { UserStore } from './user-store';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [{ provide:UserStore, useClass:UserStore}],
})
export class AppModule {}
