import { ADD_COURSE } from '../actions/courses'

const initialState = [
  { courseId: 1, name: 'Ruby' },
  { courseId: 2, name: 'JavaScript' },
  { courseId: 3, name: 'HTML and CSS' },
  { courseId: 4, name: 'Phyton' },
  { courseId: 5, name: 'Java' },
]


export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case ADD_COURSE:
      return state.concat(payload)

    default:
      return state
  }
}
