import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction ,Request,Response} from "express";
import { url } from "inspector";

@Injectable()
export class BookMiddleWare implements NestMiddleware{
    use(req: Request, res:Response, next: NextFunction ) {
        //throw new Error("Method not Implemented.....")
        //console.log("this is class based middleware implemented for book modules");
        let protocol=req.protocol;
        let host=req.get("host");
        let url=req.originalUrl;
        let Method=req.method;
        let date=new Date().toDateString()
        console.log(protocol + "://" + host +url+ "  "+ Method+"   "+ date);
        
        
        
        
        
        
        next()
        
    }
}