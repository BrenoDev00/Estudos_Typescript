import { UserType } from "../types/user.type";

export class AuthSystem {
  static login(user: UserType, password: string) {
    return user.authenticatePassword(password);
  }
}
