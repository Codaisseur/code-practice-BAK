import { CREATE_COURSE } from '../actions/courses'

const initialState = [
  { _id: 'ruby', title: 'Ruby', description: 'Ruby is awesome' },
  { _id: 'javascript', title: 'JavaScript', description: 'Learn how to write awesome JavaScript!' },
  { _id: 'html-css', title: 'HTML and CSS', description: 'Let\'s make beautiful websites.' },
  { _id: 'python', title: 'Python', description: 'Python yeahhh' },
  { _id: 'java', title: 'Java', description: 'This course will never exist...' }
]

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case CREATE_COURSE:
      return state.concat(payload)

    default:
      return state
  }
}
