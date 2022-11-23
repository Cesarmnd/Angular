export interface User {
  id: number,
  user: string,
  password: string,
  admin: boolean,
  canLoad: boolean,
  canActivateChild: boolean
}