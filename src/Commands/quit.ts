import { IUser } from '../User/IUser'

export default (user: IUser) => {
  user.connection.end()
}