import { IUser } from '../User/IUser'
import { Server } from 'net'

export interface IIRCServer {
  server: Server;
  users: Array<IUser>;

  start(port: number): void

  findUser (name: string): unknown
}
