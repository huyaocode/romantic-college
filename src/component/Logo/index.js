import React from 'react'
import logoImg from '../../assets/imgs/logo.png'
import './style.css'

export default function() {
  return (
    <div className="logo-container">
      <img src={logoImg} alt="logo"/>
    </div>
  )
}
