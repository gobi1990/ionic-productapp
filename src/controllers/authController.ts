import { UserModel } from '../models/user';

export class AuthController {
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validatePassword(password: string): boolean {
    return !!password && password.trim() !== '';
  }

  static login(user: UserModel): boolean {
    return user.email === 'testuser@gmail.com' && user.password === 'Abc@123';
  }
}
