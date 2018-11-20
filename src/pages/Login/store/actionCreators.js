import * as acType from './actionType'
import axios from 'axios'
import { Toast } from 'antd-mobile'
import { md5encryption } from '../../../util.js'

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
  ownPsw = md5encryption(ownPsw)
  return dispatch => {
    axios.post('/user/login', { deanAccout, ownPsw }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(loginSucc(res.data))
        Toast.success('登陆成功')
      } else {
        Toast.fail(res.data.msg)
      }
    })
    .catch(err => {
      Toast.fail('服务端错误')
    })
  }
}
