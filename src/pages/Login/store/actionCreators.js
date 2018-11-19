import * as acType from './actionType'
// import axios from 'axios'

/**
 * 表单修改
 */
export const changeForm = (key, value) => {
  if (key === 'deanAccount') {
    value = value.replace(/\W/, '')
  }
  return {
    type: acType.CHANGE_FORM,
    key,
    value
  }
}
/**
 * 登陆成功回调
 */
export const loginSucc = payload => ({
  type: acType.LOGIN_SUCC,
  payload
})

/**
 * 登陆
 */
export const login = (deanAccout, ownPsw) => {
  console.log('actionC')
  const pyload = '带回来的信息';
  return dispatch => {
    dispatch(loginSucc(loginSucc, pyload))
  }
}
