import ADMIN from './admin'
import INFO from './info'
import JOIN from './join'
import KICK from './kick'
import KILL from './kick'
import LIST from './list'
import MODE from './mode'
import NICK from './nick'
import NOTICE from './notice'
import OPER from './oper'
import PART from './part'
import PASS from './pass'
import PING from './ping'
import PRIVMSG from './privmsg'
import QUIT from './quit'
import TOPIC from './topic'
import USER from './user'
import USERS from './users'
import VERSION from './version'
import WHO from './who'
import WHOIS from './whois'

interface CommandsInterface {
  [index: string]: Function
}

export const Commands: CommandsInterface = {
  ADMIN,
  INFO,
  JOIN,
  KICK,
  KILL,
  LIST,
  MODE,
  NICK,
  NOTICE,
  OPER,
  PART,
  PASS,
  PING,
  PRIVMSG,
  QUIT,
  TOPIC,
  USER,
  USERS,
  VERSION,
  WHO,
  WHOIS
}
