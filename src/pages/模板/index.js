import React, { Component } from 'react'

class 页面名 extends Component {
  render() {
    return <h2>页面</h2>
  }
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(页面名)
