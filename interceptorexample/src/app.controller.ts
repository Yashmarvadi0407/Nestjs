import { Controller, Post, Req, Res, UseInterceptors } from "@nestjs/common";
import { AppInterceptor } from "./app.interceptor";
import { Request,Response } from "express";


@Controller("app")
export class AppController{

    @Post("")
    @UseInterceptors(AppInterceptor)
    // helloword(@Req() req:Request,@Res() res:Response ) : any{
    //     return res.json(req.body)
    // }
    helloword(): any{
        return"this is the response"
    }
}