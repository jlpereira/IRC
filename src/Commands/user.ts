// Parameters: <user> <mode> <unused> <realname>
import { IUser } from '../User/IUser'
import { 
  RPL_WELCOME,
  RPL_YOURHOST,
  ERR_ALREADYREGISTRED
} from '../replies'

export default (context: IUser, [username, ident, servername, ...realname]: Array<string>): void => {
  const fullRealName = realname.join(' ')

  if(!context.registered) {
    if (username.length && ident.length && fullRealName.length) {
      context.username = username
      context.realname = fullRealName
      context.servername = servername
      context.registered = true

      context.send(context.server, RPL_WELCOME, [ context.nickname, ':Welcome to Internet relay chat,', context.getMask()])
      context.send(context.server, RPL_YOURHOST, [ context.nickname, `:Your host is ${context.server.hostname}, running version <ver>` ]);
    }
  } else {
    context.send(context.server, ERR_ALREADYREGISTRED, [context.nickname, ':Unauthorized command (already registered)'])
  }
}