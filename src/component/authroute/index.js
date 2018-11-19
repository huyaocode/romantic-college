import {Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
/**
 * 用户登陆验证
 * 获取用户的信息，判断是否有cookie，做一些路由跳转
 */

//公开的页面
const publicList = ['/login', 'register']

class Auth extends Component {
  componentDidMount() {
    //如果是公开的页面就不需要重定向跳转了
    const pathname = this.props.location.pathname
    if (publicList.indexOf(pathname) > -1) {
      return null
    }
    //获取用户信息
    axios.get('/user/info').then(res => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          //有登陆信息
        } else {
          //没有登陆
          this.props.history.push('/login')
        }
      }
    }).catch(err => {
      console.error('后台错误')
    })
    //是否登陆
    //现在的url地址， 如Login不需要跳转
    //用户的sex性别，是男生还是女生
    // 是否完善用户信息（头像、个人简介）
  }
  render() {
    return null
  }
}

export default withRouter(Auth)
