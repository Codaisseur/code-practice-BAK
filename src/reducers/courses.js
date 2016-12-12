import { COURSES_LOADED } from '~/actions/courses'
import { CREATE_COURSE } from '../actions/courses'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case COURSES_LOADED :
      return payload

    case CREATE_COURSE:
      return state.concat(payload)

    default:
      return state
  }
}
