import { combineReducers } from 'redux'
import { ADD_ASSIGNMENT } from '../actions/assignments'

const initialState = [
  {
    courseId: 1,
    assignmentId: 1,
    title: 'Your First Web Page',
    text: 'Have a look at this exercise!'
  },
  {
    courseId: 1,
    assignmentId: 2,
    title: 'Installing something',
    text: 'Have a look at this other exercise!'
  },
  {
    courseId: 1,
    assignmentId: 3,
    title: 'Installing some more',
    text: 'Have a look at this exercise!'
  },
  {
    courseId: 1,
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
    default:
      return state
  }
}
