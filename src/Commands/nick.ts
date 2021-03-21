import { IUser } from '../User/IUser'
import {
  ERR_NONICKNAMEGIVEN,
  ERR_ERRONEUSNICKNAME
} from '../replies'

export default (context: IUser, [ nickname ]: any) => {
  console.log(nickname)
  const nicknameLength = nickname.length

  if (!nickname) {
    context.send(`${ERR_NONICKNAMEGIVEN} :No nickname given`)
  } else {
    if(nicknameLength > 8) {
      context.send(`${ERR_ERRONEUSNICKNAME} :Erroneous nickname`)
    }
    context.send(`${context.getMask()} NICK :${nickname}`)
    context.nickname = nickname
  }
}