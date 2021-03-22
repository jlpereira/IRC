import { IUser } from "../User/IUser";

export interface IChannel {
  users: Array<IUser>
  bans: Array<string>
  modes: Array<string>
  topic: string
  password: string
  
  addBan (ban: string): void

  addUser (user: IUser): void

  getModes (): Array<string>

  getUsers (): Array<IUser>

  removeBan (ban: string): void

  removeUser (nickname: string): void

  addMode (mode: string): void
}