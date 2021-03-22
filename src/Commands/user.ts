// Parameters: <user> <mode> <unused> <realname>
import { IUser } from '../User/IUser'
import { 
  RPL_WELCOME, 
  ERR_ALREADYREGISTRED 
} from '../replies'

export default (context: IUser, [username, ident, hostname, ...realname]: Array<string>): void => {
  const fullRealName = realname.join(' ')
  console.log(hostname)

  if(!context.registered) {
    if (username.length && ident.length && fullRealName.length) {
    context.username = username
    context.realname = fullRealName
    context.registered = true

    context.send(context.server, RPL_WELCOME, `${context.nickname} :Welcome to Internet relay chat, ${context.getMask()}`)
    }
  } else {
    context.send(context.server, ERR_ALREADYREGISTRED, `${context.nickname} :Unauthorized command (already registered)`)
  }
}