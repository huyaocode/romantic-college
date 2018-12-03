import { combineReducers } from 'redux-immutable'
import {reducer as RegisterReducer } from '../pages/Register/store'
import {reducer as LoginReducer } from '../pages/Login/store'
import {reducer as UserInfo } from '../pages/UserInfo/store'

export default combineReducers({
  register: RegisterReducer,
  login: LoginReducer,
  userInfo: UserInfo
})
