import { IIRCServer } from "./Server/IServer"
import { IUser } from "./User/IUser"

interface IMessage {
  prefix: string
  command: string | number,
  parameters: string | Array<string>

  toString(): string
}

export class Message implements IMessage {
  prefix: string
  command: string | number
  parameters: string | Array<string>

  constructor(prefix: IUser | IIRCServer, command: string | number, parameters: Array<string> | string) {
    this.prefix = prefix.getMask()
    this.command = command
    this.parameters = parameters
  }

  public toString(): string {
    const parametersLine = Array.isArray(this.parameters) ? this.parameters.join(' ') : this.parameters
    
    return `:${this.prefix} ${this.command} ${parametersLine}`
  }
}