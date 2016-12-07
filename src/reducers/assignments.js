import { combineReducers } from 'redux'
import { ADD_ASSIGNMENT } from '../actions/assignments'

const initialState = [
  {
    id: 1,
    title: 'Ruby on Rails',
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
