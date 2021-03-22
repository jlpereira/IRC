import { Socket } from 'net'
import { IIRCServer } from '../Server/IServer'

export interface IUser {
  channels: Array<string>
  connection: Socket
  hostname: string | undefined
  modes: Array<string>
  nickname: string
  realname: string
  registered: boolean
  server: IIRCServer
  username: string
  servername: string

  getMask(): string
  
  getModes(): Array<string>,

  addMode (mode: string): void,

  removeMode (mode: string): void,

  send(prefix: IUser | IIRCServer, command: string | number, parameters: Array<string> | string): void
}
