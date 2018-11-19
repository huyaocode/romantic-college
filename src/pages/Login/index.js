import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Toast
} from 'antd-mobile'
import Logo from '../../component/Logo'
import { actionCreators } from './store'
import './index.css'

class Login extends Component {
  render() {
    const {
      deanAccount,
      ownPassword,
      gotoRegister,
      handleFromChange,
      login,
      redicrectTo
    } = this.props
    return (
      <div className="login">
        {redicrectTo ? <Redirect to={redicrectTo} /> : null}
        <Logo />
        <h2 className="title">浪漫大学</h2>
        <WingBlank>
          <List>
            <InputItem
              value={deanAccount}
              onChange={v => handleFromChange('deanAccount', v)}
            >
              学号
            </InputItem>
            <WhiteSpace />
            <InputItem
              type={'password'}
              value={ownPassword}
              onChange={v => handleFromChange('ownPassword', v)}
            >
              密码
            </InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={() => login(deanAccount, ownPassword)}>登录</Button>
          <WhiteSpace />
          <Button onClick={gotoRegister}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const login = state.get('login')
  return {
    deanAccount: login.get('deanAccount'),
    ownPassword: login.get('ownPassword'),
    redicrectTo: login.get('redicrectTo')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login(deanAccount, ownPsw) {
      if (!deanAccount || !ownPsw) {
        return Toast.fail('所有项必填', 1)
      }
      dispatch(actionCreators.login(deanAccount, ownPsw))
    },
    gotoRegister() {
      ownProps.history.push('register')
    },
    //修改表单
    handleFromChange(key, value) {
      dispatch(actionCreators.changeForm(key, value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
