import { createServer, Socket, Server } from 'net'
import User from '../User/User'
import { IChannel } from '../Channel/IChannel'
import { IIRCServer } from './IServer'
import { IUser } from '../User/IUser'

class IRCServer implements IIRCServer {
  server: Server
  users: Array<IUser>
  channels: Array<IChannel>
  hostname: string = '127.0.0.1'

  constructor () {
    this.server = createServer();
    this.users = []
    this.channels = []
  }

  start (port: number) {
    this.server.listen(port, () => {
      console.log(`Server started on: ${port}`);
    });
    this.handleEvents()
  }

  public getMask (): string {
    return this.hostname
  }

  handleEvents () {
    this.server.on('connection', (s: Socket) => {
      s.setEncoding('utf8')
      console.log(`User connected: ${s.remoteAddress}:${s.remotePort}`)
      this.users.push(new User(s, this))
    })
  }

  findUser (searchNick: string): unknown {
    return this.users.find(({ nickname }) => nickname === searchNick)
  }

  // findChannel (searchChannel: string): unknown {
  //   return this.channels.find(({ name }) => name === searchChannel)
  // }

  joinChannel (user: IUser, channel: string) {
    console.log(user)
    console.log(channel)
  }

}

export {
  IRCServer
}
