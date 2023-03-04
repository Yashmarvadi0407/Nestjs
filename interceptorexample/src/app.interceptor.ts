import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { Request } from "express";


@Injectable()
export class AppInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>  {
       const ctx=context.switchToHttp();
       const request=ctx.getRequest<Request>();
       request.body.age=22;
       request.body.name=" this is the name"
        return next.handle().pipe(map((data)=>{
            return " data is converted using interceptor"
        }))
        
    }

}
