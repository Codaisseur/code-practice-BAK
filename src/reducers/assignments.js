import { combineReducers } from 'redux'
import { ADD_ASSIGNMENT } from '../actions/assignments'

const initialState = [
  {
    assignmentId: 1,
    title: 'Your First Web Page',
    description: 'Have a look at this exercise!'
  },
  {
    assignmentId: 2,
    title: 'Installing something',
    description: 'Have a look at this other exercise!'
  },
  {
    assignmentId: 3,
    title: 'Installing some more',
    description: 'Have a look at this exercise!'
  },
  {
    assignmentId: 4,
    title: 'Go!',
    description: 'Have a look at this exercise!'
  }
]

export default function assignments(state = initialState, action) {
  switch (action.type) {
    case ADD_ASSIGNMENT:
      return [
        ...state,
        {
          description: action.description,
        }
      ]
    default:
      return state
  }
}
