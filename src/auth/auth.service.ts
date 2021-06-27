import { Injectable } from '@nestjs/common';
import { StoreOwnersService } from 'src/store-owners/store-owners.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private storeOwnersService: StoreOwnersService,
        private jwtService: JwtService
    ) { }
    async validateUser(username: String, pass: String): Promise<any> {
        const user = await this.storeOwnersService.findByName(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            console.log(result);
            return { user };
        }
        return null;
    }
    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            user_id: user._id,
            access_token: this.jwtService.sign(payload)
        };
    }

}
