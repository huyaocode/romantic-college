import { fromJS } from 'immutable'
import * as acType from './actionType'

const defaultState = fromJS({
  deanAccount: '',
  username: '',
  sex: '',
  entranceTime: [],
  major: [],
  hometown: '',
  signature: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case acType.CHANGE_FORM: //修改表单
      return state.merge({[action.key]: fromJS(action.value)})
    case acType.FILL_INFO:
    console.log(action.value)
      const {sex, user_name, entranceTime, major, hometown, signature} = action.value
      return state.merge({
        username: user_name,
        sex: sex,
        entranceTime,
        major,
        hometown,
        signature
      })
    default:
      return state
  }
}