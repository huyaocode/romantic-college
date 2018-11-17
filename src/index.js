import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//react-fastclick
import initReactFastclick from 'react-fastclick'
//axios拦截器
import './axiosConfig'
initReactFastclick()

ReactDOM.render(<App />, document.getElementById('root'))
