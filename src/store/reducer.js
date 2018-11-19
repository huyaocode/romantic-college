import { combineReducers } from 'redux-immutable'
import {reducer as RegisterReducer } from '../pages/Register/store'
import {reducer as LoginReducer } from '../pages/Login/store'

export default combineReducers({
  register: RegisterReducer,
  login: LoginReducer
})
