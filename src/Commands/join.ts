import { IUser } from "../User/IUser"
// const validChannel = ['&', '#', '+', '!']

export default (context: IUser, [ channel ]: any) => {
  context.server.joinChannel(context, channel)
}