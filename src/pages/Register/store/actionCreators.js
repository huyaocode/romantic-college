import axios from 'axios'
import * as acType from './actionType'
import { Toast } from 'antd-mobile'
import {md5encryption} from '../../../util.js'
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
 * 注册成功action
 */
export const registSucc = payload => ({
  type: acType.REGISTE_ACCOUNT_SUCC,
  payload
})

/**
 * 注册函数
 */
export const regist = (
  username,
  deanAccount,
  ownPassword,
  repeatePassword,
  sex
) => {
  
  //加密
  ownPassword = md5encryption(ownPassword)
  return dispath => {
    axios
      .post('/user/register', { username, deanAccount, ownPassword, sex })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispath(registSucc(res.data.infos))
          Toast.success('注册成功')
        } else {
          Toast.fail(res.data.errMsg)
        }
      })
      .catch(err => {
        Toast.fail('服务端错误')
      })
  }
}
