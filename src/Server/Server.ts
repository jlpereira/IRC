import { createServer, Socket, Server } from 'net'
import User from '../User/User'
import { IIRCServer } from './IServer'

class IRCServer implements IIRCServer {
  server: Server;
  users: Array<User>;

  constructor() {
    this.server = createServer();
    this.users = []
  }

  start (port: number) {
    this.server.listen(port, () => {
      console.log(`Server started on: ${port}`);
    });
    this.handleEvents()
  }

  handleEvents () {
    this.server.on('connection', (s: Socket) => {
      s.setEncoding('utf8');
      console.log(`User connected: ${s.remoteAddress}:${s.remotePort}`);
      this.users.push(new User(s, this));
    })
  }

  findUser (searchNick: string): unknown {
    return this.users.find(({ nickname }) => nickname === searchNick)
  }

  // findChannel (searchChannel: string): unknown {
  //   return this.channels.find(({ name }) => name === searchChannel)
  // }

}

export {
  IRCServer
}
