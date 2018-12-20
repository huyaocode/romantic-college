import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import Friends from '../Friends'
import './style.css'

function Icon(url) {
  return (
    <div
      style={{
        width: '22px',
        height: '22px',
        background: `url(${url}) center center /  21px 21px no-repeat`
      }}
    />
  )
}

function Message() {
  return (
    <div>
      <div>消息---</div>
    </div>
  )
}

class Dashboard extends Component {

  render() {
    const { pathname } = this.props.location
    const navList = [
      {
        path: '/msg',
        text: '消息',
        icon:
          'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        selectedIcon:
          'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        title: '消息列表'
      },
      {
        path: '/friends',
        text: '同学',
        icon:
          'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        selectedIcon:
          'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        title: '同学列表'
      }
    ]

    return (
      <div style={{ height: '100%', position: 'relative' }}>
        {/* 中心展示区 */}
        <div style={{ height: 'calc(100% - 50px)', overflow: 'scroll'}}>
          <Switch>
            <Route path="/msg" component={Message} />
            <Route path="/friends" component={Friends} />
            <Route component={Message} />
          </Switch>
        </div>
        {/* 底部切换栏 */}
        <div
          style={{
            width: '100%',
            position: 'fixed',
            height: '50px',
            bottom: '0px'
          }}
        >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
          >
            {navList.map(v => (
              <TabBar.Item
                key={v.path}
                title={v.text}
                icon={Icon(v.icon)}
                selectedIcon={Icon(v.selectedIcon)}
                selected={pathname === v.path}
                badge={0}
                onPress={() => {
                  this.props.history.push(v.path)
                }}
                // data-seed="logId"
              />
            ))}
          </TabBar>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
