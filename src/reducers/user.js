import { USER_LOGGED_IN, USER_RESET_PASSWD, USER_LOGGED_OUT, USER_LOGIN_FAILED } from '~/actions/user'

export default function userUpdate(
  state = JSON.parse(localStorage.getItem('practice.user')) || {}, { type, payload }) {
    switch (type) {
      case USER_LOGGED_IN :
      case USER_RESET_PASSWD :
        const user = Object.assign({}, state, payload.data, { token: payload.token })
        localStorage.setItem('practice.user', JSON.stringify(user))
        return user

      case USER_LOGGED_OUT :
      case USER_LOGIN_FAILED :
        localStorage.removeItem('practice.user')
        return {}

      default :
        return state
    }
}
