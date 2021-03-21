// RFC 2812

export const
  ERR_NOSUCHNICK = 401, // "<nickname> :No such nick/channel"
  ERR_NOSUCHSERVER = 402, // "<server name> :No such server"
  ERR_NOSUCHCHANNEL = 403, // "<channel name> :No such channel"
  ERR_CANNOTSENDTOCHAN = 404, // "<channel name> :Cannot send to channel"
  ERR_TOOMANYCHANNELS = 405, // "<channel name> :You have joined too many channels"
  ERR_WASNOSUCHNICK = 406, // "<nickname> :There was no such nickname"
  ERR_TOOMANYTARGETS = 407, // "<target> :<error code> recipients. <abort message>"
  ERR_NOSUCHSERVICE = 408, // "<service name> :No such service"
  ERR_NOORIGIN = 409, // ":No origin specified"
  ERR_NORECIPIENT = 411, // ":No recipient given (<command>)"
  ERR_NOTEXTTOSEND = 412, // ":No text to send"
  ERR_NOTOPLEVEL = 413, // "<mask> :No toplevel domain specified"
  ERR_WILDTOPLEVEL = 414, // "<mask> :Wildcard in toplevel domain"
  ERR_BADMASK = 415, // "<mask> :Bad Server/host mask"
  ERR_UNKNOWNCOMMAND = 421, // "<command> :Unknown command"
  ERR_NOMOTD = 422, // ":MOTD File is missing"
  ERR_NOADMININFO = 423, // "<server> :No administrative info available"
  ERR_FILEERROR = 424, // ":File error doing <file op> on <file>"
  ERR_NONICKNAMEGIVEN = 431, // ":No nickname given"
  ERR_ERRONEUSNICKNAME = 432, // "<nick> :Erroneous nickname
  ERR_NICKNAMEINUSE = 433, // "<nick> :Nickname is already in use"
  ERR_NICKCOLLISION = 436, // "<nick> :Nickname collision KILL from <user>@<host>"
  ERR_UNAVAILRESOURCE = 437, // "<nick/channel> :Nick/channel is temporarily unavailable"
  ERR_USERNOTINCHANNEL = 441, // "<nick> <channel> :They aren't on that channel"
  ERR_NOTONCHANNEL = 442, // "<channel> :You're not on that channel"
  ERR_USERONCHANNEL = 443, // "<user> <channel> :is already on channel"
  ERR_NOLOGIN = 444, // "<user> :User not logged in",
  ERR_SUMMONDISABLED = 445, // ":SUMMON has been disabled"
  ERR_USERSDISABLED = 446, // ":USERS has been disabled"
  ERR_NOTREGISTERED = 451, // ":You have not registered"
  ERR_NEEDMOREPARAMS = 461, // "<command> :Not enough parameters"
  ERR_ALREADYREGISTRED = 462, // ":Unauthorized command (already registered)"
  ERR_NOPERMFORHOST = 463, // ":Your host isn't among the privileged"
  ERR_PASSWDMISMATCH = 464, // ":Password incorrect"
  ERR_YOUREBANNEDCREEP = 465, // ":You are banned from this server"
  ERR_YOUWILLBEBANNED = 466,
  ERR_KEYSET = 467, // "<channel> :Channel key already set"
  ERR_CHANNELISFULL = 471, // "<channel> :Cannot join channel (+l)"
  ERR_UNKNOWNMODE = 472, // "<char> :is unknown mode char to me for <channel>"
  ERR_INVITEONLYCHAN = 473, // "<channel> :Cannot join channel (+i)"
  ERR_BANNEDFROMCHAN = 474, // "<channel> :Cannot join channel (+b)"
  ERR_BADCHANNELKEY = 475, // "<channel> :Cannot join channel (+k)"
  ERR_BADCHANMASK = 476, // "<channel> :Bad Channel Mask"
  ERR_NOCHANMODES = 477, // "<channel> :Channel doesn't support modes"
  ERR_BANLISTFULL = 478, // "<channel> <char> :Channel list is full"
  ERR_NOPRIVILEGES = 481, // ":Permission Denied- You're not an IRC operator"
  ERR_CHANOPRIVSNEEDED = 482, // "<channel> :You're not channel operator"
  ERR_CANTKILLSERVER = 483, // ":You can't kill a server!"
  ERR_RESTRICTED = 484, // ":Your connection is restricted!",
  ERR_UNIQOPPRIVSNEEDED = 485, // ":You're not the original channel operator"
  ERR_NOOPERHOST = 491, // ":No O-lines for your host"
  ERR_UMODEUNKNOWNFLAG = 501, // ":Unknown MODE flag"
  ERR_USERSDONTMATCH = 502

//  - 412 - 415 are returned by PRIVMSG to indicate that
// the message wasn't delivered for some reason.
// ERR_NOTOPLEVEL and ERR_WILDTOPLEVEL are errors that
// are returned when an invalid use of
// "PRIVMSG $<server>" or "PRIVMSG #<host>" is attempted.