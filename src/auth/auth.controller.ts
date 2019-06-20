import { Controller, Post, Body } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  singUp(@Body() authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.authService.singUp(authCredentialDto);
  }
}
