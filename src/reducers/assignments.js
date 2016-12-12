import { combineReducers } from 'redux'
import { ADD_ASSIGNMENT, ASSIGNMENTS_LOADED } from '../actions/assignments'

const initialState = [
  {
    assignmentId: 1,
    title: 'Your First Web Page',
    text: 'Have a look at this exercise!'
  },
  {
    assignmentId: 2,
    title: 'Installing something',
    text: 'Have a look at this other exercise!'
  },
  {
    assignmentId: 3,
    title: 'Installing some more',
    text: 'Have a look at this exercise!'
  },
  {
    assignmentId: 4,
    title: 'Go!',
    text: 'Have a look at this exercise!'
  }
]

export default (state = initialState, { type, payload } = {}) => {

  switch(type) {
    case ASSIGNMENTS_LOADED :
      return payload

    case ADD_ASSIGNMENT:
      return state.concat(payload)

    default:
      return state
  }
}
