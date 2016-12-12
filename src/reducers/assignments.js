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



export default function assignments(state = initialState, action) {
  switch (action.type) {
    case ADD_ASSIGNMENT:
      return [
        ...state,
        {
          text: action.text,
        }
      ]

    case ASSIGNMENTS_LOADED :
      return action.payload

    default:
      return state
  }
}
