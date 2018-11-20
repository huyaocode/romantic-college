import { fromJS } from 'immutable'
import * as acType from './actionType'

const defaultState = fromJS({
  
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}