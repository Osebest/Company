export class User {
  name: string;
  email: string;
  id: number;
  role: Role;
}

export enum Role {
  INTERN = 'intern',
  ADMIN = 'admin',
  USER  = 'user',
  ENGINEER  = 'engineer',
}
