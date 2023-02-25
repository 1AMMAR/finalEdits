export class UserProfile {
  id: number;
  username: string;
  email: string;


  constructor(user?:UserProfile) {
    this.id = user && user.id || -1;
    this.username = user && user.username || '';
    this.email = user && user.email || '';
  }
}
