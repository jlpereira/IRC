import { Socket } from 'net'
import { IIRCServer } from '../Server/IServer'

export interface IUser {
  authenticated: boolean;
  channels: Array<string>;
  connection: Socket;
  modes: Array<string>;
  nickname: string;
  realname: string;
  username: string;
  hostname: string|unknown;
  server: IIRCServer;

  getMask(): string
  send(message: string): void
}
