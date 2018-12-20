import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import AuthRouter from './component/authroute'
import Login from './pages/Login'
import Register from './pages/Register'
import UserInfo from './pages/UserInfo'
import Dashboard from './pages/Dashboard'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div style={{height: '100%'}}>
            <AuthRouter></AuthRouter>
            <Switch>
              <Route path="/info" exact component={UserInfo} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route component={Dashboard}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
