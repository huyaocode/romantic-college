import { fromJS } from 'immutable'
import * as acType from './actionType'
import { getRedictPath } from '../../../util.js'

const defaultState = fromJS({
  isAuth: false,
  username: '',
  deanAccount: '',
  ownPassword: '',
  repeatePassword: '',
  sex: 'boy',
  redicrectTo: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case acType.CHANGE_FORM: //修改表单
      return state.merge({ [action.key]: action.value, errType: '' })
    case acType.REGISTE_ACCOUNT_SUCC: //注册回调
      return state.merge({
        isAuth: true,
        redicrectTo: getRedictPath('register', action.payload)
      })
    default:
      return state
  }
}
