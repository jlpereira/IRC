import { IUser } from '../User/IUser'
import { Server } from 'net'
import { IChannel } from '../Channel/IChannel'

export interface IIRCServer {
  channels: Array<IChannel>
  hostname: String
  server: Server
  users: Array<IUser>

  findUser (name: string): unknown

  getMask (): string

  joinChannel (user: IUser, channel: string): void

  start(port: number): void
}
