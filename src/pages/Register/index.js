import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio,
  Toast
} from 'antd-mobile'

const RadioItem = Radio.RadioItem
/**
 * 注册组件
 */
function Register(props) {
  const sex = [
    { value: 'boy', label: '男生' },
    { value: 'girl', label: '女生' }
  ]
  const {
    username,
    deanAccount,
    ownPassword,
    repeatePassword,
    sexType,
    register,
    handleFromChange,
    gotoLogin,
    redicrectTo
  } = props

  return (
    <div>
      {/* 路由跳转，当注册成功时，但用户信息没有完善，需要跳转到info路由下 */}
      {redicrectTo ? <Redirect to={redicrectTo} /> : null}
      <WhiteSpace size="xl" />
      <WhiteSpace size="xl" />
      <h2 className="title">浪漫大学</h2>
      <WhiteSpace size="xl" />
      <WingBlank>
        <List>
          <InputItem
            value={username}
            onChange={v => handleFromChange('username', v)}
          >
            昵称
          </InputItem>
          <WhiteSpace />
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
          <WhiteSpace />
          <InputItem
            type={'password'}
            value={repeatePassword}
            onChange={v => handleFromChange('repeatePassword', v)}
          >
            确认密码
          </InputItem>
        </List>
        <List renderHeader={() => '性别'}>
          {sex.map(i => (
            <RadioItem
              key={i.value}
              checked={sexType === i.value}
              onChange={() => {
                handleFromChange('sex', i.value)
              }}
            >
              {i.label}
            </RadioItem>
          ))}
        </List>
        <WhiteSpace size="xl" />
        <Button
          onClick={() => {
            register(
              username,
              deanAccount,
              ownPassword,
              repeatePassword,
              sexType
            )
          }}
        >
          注册
        </Button>
        <WhiteSpace />
        <Button onClick={gotoLogin}>登陆</Button>
      </WingBlank>
    </div>
  )
}

const mapStateToProps = state => {
  const register = state.get('register')
  return {
    username: register.get('username'),
    deanAccount: register.get('deanAccount'),
    ownPassword: register.get('ownPassword'),
    repeatePassword: register.get('repeatePassword'),
    sexType: register.get('sex'),
    errType: register.get('errType'),
    errMsg: register.get('errMsg'),
    redicrectTo: register.get('redicrectTo')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //修改表单
    handleFromChange(key, value) {
      dispatch(actionCreators.changeForm(key, value))
    },
    //发起注册
    register(username, deanAccount, ownPassword, repeatePassword, sex) {
      if (!username || !deanAccount || !ownPassword || !repeatePassword) {
        return Toast.fail('所有项必填', 1)
      }
      if (ownPassword !== repeatePassword) {
        return Toast.fail('密码与重复密码不同', 1)
      }
      if (ownPassword.length < 3) {
        return Toast.fail('密码太短', 1)
      }
      dispatch(
        actionCreators.regist(
          username,
          deanAccount,
          ownPassword,
          repeatePassword,
          sex
        )
      )
    },
    gotoLogin() {
      ownProps.history.push('login')
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
