import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Friends extends Component {
  componentDidMount() {
    this.props.getFriendsList();
  }
  render() {
    const {list} = this.props
    console.log('list',list)
    return (
      <div>
        <ul>
        {list.map(item=>(
          <li key={item.dean_accunt}>
            <div>
              {item.user_name}
            </div>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.getIn(['friends', 'list']).toJS()
})

const mapDispatchToProps = dispatch => {
  return {
    getFriendsList: function() {
      dispatch(actionCreators.getFriendsList())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends)
