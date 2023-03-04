import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
@Controller()
export class AppController {
  //controlle model
  constructor(private readonly appService: AppService) {}



  //controller model view
  @Get()
  getView(@Res() res:Response){
    return res.render("index",{ books:this.appService.getAllBook()})
  }
}
