import { Controller, Get, UseGuards ,Request, Post} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { CONSTANTS } from './constants';
import { Roleguard } from './role.guard';



@Controller("app")
export class AppController {
    constructor(private authService:AuthService){

    }
   
@Post("login")
@UseGuards(AuthGuard('local'))
gethello(@Request() req):string{
    //authentication complete
    //next step authorize
    //id card jwt token

    const token=this.authService.generateToken(req.user)
    return token
}


@Get("/android-developer")
@UseGuards(AuthGuard('jwt'),new Roleguard(CONSTANTS.ROLE.ANDROID_DEVELOPER))
androiddeveloperdata():string{
    return " this is ANDROID-developer data...."
}


@Get("/web-developer")
@UseGuards(AuthGuard('jwt'),new Roleguard(CONSTANTS.ROLE.WEB_DEVELOPER))
webdeveloperdata():string{
    return " this is web-developer data...."
}
}
