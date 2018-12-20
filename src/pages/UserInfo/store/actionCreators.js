import axios from 'axios'
import * as acType from './actionType'
import { fromJS } from 'immutable'

/**
 * 表单修改
 */
export const changeForm = (key, value) => {
  return {
    type: acType.CHANGE_FORM,
    key,
    value
  }
}

export const fillUserInfo = (infoObj) => {
  return  {
    type: acType.FILL_INFO,
    value: infoObj
  }
}

/**
 * 获取用户信息
 * @param {*} deanAccount 
 */
export const getUserInfo = deanAccount => {

  return dispatch => {
    if (deanAccount) {
      axios.get(`/user/infos?deanAccount=${deanAccount}`).then(res => {
        if(res.status === 200 && res.data.data) {
          if(res.data.data.entranceTime)
            res.data.data.entranceTime = fromJS([res.data.data.entranceTime]);
          if(res.data.data.major)
            res.data.data.major = fromJS([res.data.data.major]);
          dispatch(fillUserInfo(res.data.data))
        }
      })
    }
  }
}

/**
 * 更新用户信息
 * @param {*} username 
 * @param {*} entranceTime 
 * @param {*} major 
 * @param {*} hometown 
 * @param {*} signature 
 */
export const updateUserInfo = (deanAccount, username, entranceTime, major, hometown, signature) =>  {
  return dispatch => {
    axios.post('/user/infos', {deanAccount, username, entranceTime, major, hometown, signature}).then(res => {
      if(res.status === 200 && res.data.code === 0) {
        alert('跟新成功')
      } else {
        alert(res.data.msg)
      }
    }).catch(err => {
      console.error('更新用户信息失败', err)
    })
  }
}