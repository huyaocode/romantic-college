import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'antd-mobile';


class App extends Component {
  componentDidMount() {
    axios.get('/data').then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  }
  render() {
    return (
      <div className="App">
        hellow 
        <Button>asdff</Button>
        <div className='test'>
        asdfdsaf
        </div>
      </div>
    );
  }
  
}

export default App;
