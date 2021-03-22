import { IUser } from '../User/IUser'
import {
  ERR_NONICKNAMEGIVEN,
  ERR_ERRONEUSNICKNAME
} from '../replies'

export default (context: IUser, [ nickname ]: any) => {
  const nicknameLength = nickname.length

  if (!nickname) {
    context.send(context.server, ERR_NONICKNAMEGIVEN, ':No nickname given')
  } else {
    if(nicknameLength > 8) {
      context.send(context.server, ERR_ERRONEUSNICKNAME, ':Erroneous nickname')
    }
    context.send(context, 'NICK', `:${nickname}`)
    context.nickname = nickname
  }
}