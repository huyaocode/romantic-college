import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import { actionCreators } from './store'
import {
  NavBar,
  InputItem,
  List,
  WingBlank,
  WhiteSpace,
  Button,
  Picker,
  ImagePicker,
  TextareaItem,
  Icon
} from 'antd-mobile'

class UserInfo extends Component {
  componentDidMount() {
    this.props.getUserInfo(this.props.deanAccount)
  }
  render() {
    const { handleFromChange, updateUserInfo } = this.props
    const { getFieldProps } = this.props.form
    const entranceTimeOptions = [
      { value: '2018', label: '2018' },
      { value: '2017', label: '2017' },
      { value: '2016', label: '2016' },
      { value: '2015', label: '2015' }
    ]
    const majorOptions = [
      { value: '1', label: '计算机科学与技术学院' },
      { value: '2', label: '材料科学与工程学院' },
      { value: '3', label: '外国语学院' },
      { value: '4', label: '制造科学与工程学院' },
      { value: '5', label: '马克思主义学院' },
      { value: '6', label: '国防科技学院' },
      { value: '7', label: '法学院' },
      { value: '8', label: '信息工程学院' },
      { value: '9', label: '文学与艺术学院' },
      { value: '10', label: '环境与资源学院' },
      { value: '11', label: '生命科学与工程学院/农学院' },
      { value: '12', label: '土木工程与建筑学院' },
      { value: '13', label: '理学院' },
      { value: '14', label: '经济管理学院' },
      { value: '15', label: '体育学科部' },
      { value: '16', label: '应用技术学院' }
    ]

    const {
      username,
      deanAccount,
      sex,
      entranceTime,
      major,
      hometown,
      signature
    } = this.props
    let jsEntranceTime = null
    let jsmajor = null
    if ( entranceTime) {
      jsEntranceTime = entranceTime.toJS()
    }
    if (major) {
      jsmajor = major.toJS()
    }
    console.log('jsmajor',jsmajor, major)
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          style={{ backgroundColor: '#fb7299' }}
        >
          完善个人信息
        </NavBar>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WingBlank>
          <List>
            <ImagePicker />
            <InputItem
              value={username}
              onChange={v => handleFromChange('username', v)}
            >
              昵称
            </InputItem>
            <InputItem value={deanAccount} disabled>
              学号
            </InputItem>
            <InputItem value={sex === 'boy' ? '男' : '女'} disabled>
              性别
            </InputItem>
            <Picker
              data={entranceTimeOptions}
              value={jsEntranceTime}
              cols={1}
              {...getFieldProps('entranceTime', {
                initialValue: jsEntranceTime
              })}
              onChange={v => handleFromChange('entranceTime', v)}
              className="forss"
            >
              <List.Item arrow="horizontal">入学年份</List.Item>
            </Picker>
            <Picker
              data={majorOptions}
              cols={1}
              {...getFieldProps('major', { initialValue: jsmajor })}
              onChange={v => handleFromChange('major', v)}
              className="forss"
            >
              <List.Item arrow="horizontal">学院</List.Item>
            </Picker>
            <InputItem
              value={hometown}
              onChange={v => handleFromChange('hometown', v)}
            >
              家乡
            </InputItem>

            <TextareaItem
              value={signature}
              title="个性签名"
              placeholder="介绍介绍你自己吧"
              data-seed="logId"
              autoHeight
              onChange={v => handleFromChange('signature', v)}
              rows={3}
            />
          </List>
          <WhiteSpace size="xl" />
          <Button
            onClick={() => updateUserInfo(
              deanAccount,
              username,
              jsEntranceTime,
              jsmajor,
              hometown,
              signature
            )}
          >
            提交修改
          </Button>
        </WingBlank>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const userInfo = state.get('userInfo')
  return {
    username: userInfo.get('username'),
    sex: userInfo.get('sex'),
    entranceTime: userInfo.get('entranceTime'),
    major: userInfo.get('major'),
    hometown: userInfo.get('hometown'),
    signature: userInfo.get('signature'),
    deanAccount: state.getIn(['login', 'deanAccount']) ? state.getIn(['login', 'deanAccount']) : state.getIn(['register', 'deanAccount'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFromChange(key, value) {
      dispatch(actionCreators.changeForm(key, value))
    },
    getUserInfo(userId) {
      dispatch(actionCreators.getUserInfo(userId))
    },
    updateUserInfo(deanAccount,username, entranceTime, major, hometown, signature) {
      dispatch(
        actionCreators.updateUserInfo(
          deanAccount,
          username,
          entranceTime,
          major,
          hometown,
          signature
        )
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(UserInfo))
