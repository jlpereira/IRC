import { Commands } from '../Commands/commands'
import { ERR_UNKNOWNCOMMAND } from '../replies'
import { IIRCServer } from '../Server/IServer'
import { IUser } from './IUser'
import { Socket } from 'net'
import { Message } from '../Message'

class User implements IUser {
  channels: Array<string> = []
  connection: Socket
  hostname: string | undefined
  modes: Array<string> = []
  nickname: string = ''
  realname: string = ''
  registered: boolean = false
  server: IIRCServer
  username: string = ''

  constructor (s: Socket, server: IIRCServer) {
    this.server = server
    this.connection = s
    this.hostname = s.remoteAddress
    this.handleEvents()
  }

  private handleEvents (): void {
    this.connection.on('data', (data) => this.receiveUserData(data))
  }

  public getMask (): string {
    return `${this.nickname}!${this.username}@${this.hostname}`
  }

  public addMode (mode: string): void {
    const index : number = this.findMode(mode)

    if(index > -1) {
      this.modes.push(mode)
    }
  }

  public removeMode (mode: string): void {
    const index : number = this.findMode(mode)
    
    if(index > -1) {
      this.modes.splice(index, 1)
    }
  }

  private findMode (mode: string): number {
    return this.modes.findIndex((item: string) => item === mode)
  }

  public getModes (): Array<string> {
    return this.modes
  }

  private receiveUserData (data: Buffer): void {
    const readData = data.toString()

    readData.split('\r').map(line => line.trim()).forEach(line => {
        if(line.length) {
          this.processLine(line)
        }
    })
  }

  private processLine (lineString: string): void {
    const params: Array<string> = lineString.split(' ')
    const commandName: string = params.shift() || ''
    const fn = Commands[commandName]

    console.log(`CLIENT: ${lineString}`)

    if (fn) {
      fn(this, params)
    } else {
      this.send(this.server, ERR_UNKNOWNCOMMAND, `${commandName} Unknown command`)
    }
  }

  send (prefix: IUser | IIRCServer, command: string | number, parameters: Array<string> | string): void {
    const message = new Message(prefix, command, parameters)
    // const sendMessage = `:${this.server.hostname} ${message}\r\n`
    console.log(`SERVER: ${message}`)
    this.connection.write(message + '\r\n')
  }
}

export default User
