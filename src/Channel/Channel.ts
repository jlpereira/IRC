import { IUser } from '../User/IUser'
import { IChannel } from './IChannel'

class Channel implements IChannel {
  users : Array<IUser> = []
  bans: Array<string> = []
  modes: Array<string> = []
  topic: string = ''
  password: string = ''
  
  addBan (ban: string): void {
    this.bans.push(ban)
  }

  addUser (user: IUser): void {
    this.users.push(user)
  }

  getModes (): Array<string> {
    return this.modes
  }

  getUsers (): Array<IUser> {
    return this.users
  }

  removeBan (ban: string): void {
    const index: number = this.bans.findIndex((item: string) => item === ban)
    if(index > -1) {
      this.bans.splice(index, 1)  
    }
  }

  removeUser (nickname: string): void {
    this.users.findIndex((user: IUser) => user.nickname === nickname)
  }

  addMode (mode: string): void {
    const index: number = this.modes.findIndex((item: string) => item === mode)

    if(index < 0) {
      this.modes.push(mode)
    }
  }

  setTopic (topic: string): void {
    this.topic = topic
  }
}

export default Channel