import axios from 'axios'
import * as acType from './actionType'

const loadList = (list) => ({
  type: acType.GTE_FRIENDS_LIST,
  value: list
})

/**
 * 这样做将使 action 创建函数更容易被移植和测试。
 * 一个组件中的action也可能被其他组件调用，使用action创建函数可以保证创建的action正确
 */
export const getFriendsList = () => {
  return dispatch => {
    axios.get('/user/list').then( res => {
      console.log('res', res.data)
      dispatch(loadList(res.data))
    }).catch(err => {
      console.log('没有获取到数据')
    })
  }
}