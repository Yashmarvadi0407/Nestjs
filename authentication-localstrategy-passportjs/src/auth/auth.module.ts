import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { jwtstrategy } from './jwt.strategy';
import { LocalStrategy } from './passport.local.strategy';



@Module({
  imports: [UserModule,PassportModule,
    JwtModule.register({
        secret:"key",
        signOptions:{
         expiresIn:"60s"
        }
  })],
  controllers: [],
  providers: [LocalStrategy,AuthService,jwtstrategy],
  exports:[AuthService]
})
export class AuthModule {}
