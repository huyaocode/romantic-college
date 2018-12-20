import { fromJS } from 'immutable'
import * as acType from './actionType'

const defaultState = fromJS({
  list: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case acType.GTE_FRIENDS_LIST:
      return state.set('list', fromJS(action.value))
    default:
      return state
  }
}