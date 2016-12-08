import { CREATE_COURSE } from '../actions/courses'

const initialState = [
  { courseId: 1, name: 'Ruby', description: 'Ruby is awesome' },
  { courseId: 2, name: 'JavaScript', description: 'Learn how to write awesome JavaScript!' },
  { courseId: 3, name: 'HTML and CSS', description: 'Let\'s make beautiful websites.' },
  { courseId: 4, name: 'Python', description: 'Python yeahhh' },
  { courseId: 5, name: 'Java', description: 'This course will never exist...' }
]

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case CREATE_COURSE:
      return state.concat(payload)

    default:
      return state
  }
}
