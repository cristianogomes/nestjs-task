import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { throws } from 'assert';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async singUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    return await this.userRepository.singUp(authCredentialDto);
  }

  async signIn(authCredentialDto: AuthCredentialDto) {
    const username = await this.userRepository.validateUserPassword(
      authCredentialDto,
    );

    if (!username) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
