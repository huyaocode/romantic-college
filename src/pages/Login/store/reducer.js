import { fromJS } from 'immutable'
import * as acType from './actionType'
import { getRedictPath } from '../../../util.js'

const defaultState = fromJS({
  isAuth: false,
  deanAccount: '',
  ownPassword: '',
  redicrectTo: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case acType.CHANGE_FORM: //修改表单
      return state.merge({ [action.key]: action.value })
    case acType.LOGIN_SUCC: //登陆回调
      return state.merge({
        isAuth: true,
        redicrectTo: getRedictPath(action.payload)
      })
    default:
      return state
  }
}