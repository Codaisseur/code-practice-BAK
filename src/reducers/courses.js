import { COURSES_LOADED } from '~/actions/courses'
import { CREATE_COURSE } from '~/actions/courses'

// const initialState = [
//   { _id: 1, title: 'Ruby', description: 'Ruby is awesome' },
//   { _id: 2, title: 'JavaScript', description: 'Learn how to write awesome JavaScript!' },
//   { _id: 3, title: 'HTML and CSS', description: 'Let\'s make beautiful websites.' },
//   { _id: 4, title: 'Python', description: 'Python yeahhh' },
//   { _id: 5, title: 'Java', description: 'This course will never exist...' }
// ]

export default function courses(state = [], { type, payload }) {

  switch(type) {
    case COURSES_LOADED :
      return payload

    case CREATE_COURSE :
      return state.concat(payload)

    default:
      return state
  }
}
