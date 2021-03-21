import { Socket } from 'net'
import { IIRCServer } from '../Server/IServer'
import { IUser } from './IUser'
import { Commands } from '../Commands/commands'
import { ERR_UNKNOWNCOMMAND } from '../replies'

class User implements IUser {
  authenticated: boolean = false
  channels: Array<string> = []
  connection: Socket
  hostname: unknown
  modes: Array<string> = []
  nickname: string = ''
  realname: string = ''
  server: IIRCServer
  username: string = ''

  constructor (s: Socket, server: IIRCServer) {
    this.server = server
    this.connection = s
    this.hostname = s.remoteAddress
    this.handleEvents()
  }

  private handleEvents () {
    this.connection.on('data', (data) => this.receiveUserData(data))
  }

  public getMask () {
    return `:${this.nickname}!${this.username}@${this.hostname}`
  }

  private receiveUserData (data: Buffer) {
    const readData = data.toString()

    readData.split('\r').forEach(line => {
      const trimLine = line.trim()
      if(trimLine.length) {
        this.processLine(trimLine)
      }
    })
  }

  private processLine (lineString: string) {
    const params = lineString.split(' ')
    const commandName: string = params.shift() || ''
    const fn = Commands[commandName]
    if (fn) {
      fn(this, params)
    } else {
      this.send(`${ERR_UNKNOWNCOMMAND} :<${lineString}> Unknown command`)
    }
  }

  send (message: string) {
    this.connection.write(`${message}\r\n`)
  }
}

export default User
