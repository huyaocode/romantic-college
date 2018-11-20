import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import AuthRouter from './component/authroute'
import Login from './pages/Login'
import Register from './pages/Register'

function Boss () {
  return <div>Boss</div>
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <AuthRouter></AuthRouter>
            <Route path="/boss" exact component={Boss} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
