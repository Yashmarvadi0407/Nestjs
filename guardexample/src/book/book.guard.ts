import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";



@Injectable()
export class BookGuard implements CanActivate{

    public username:string="yashlal";
    public password:string="yash";
    canActivate(context: ExecutionContext): boolean {
        const ctx=context.switchToHttp();
        const request=ctx.getRequest<Request>();
    if(request.header("username") == undefined ||
     request.header("password")==undefined) return false;

      return request.header("username") == this.username 
      && request.header("password")==this.password;









}}