import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';

@Controller()
export class AuthController {

    @Post('auth/register')
    register(@Body() body: RegisterDto){
        return body;
    }
}
