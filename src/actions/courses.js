export const ADD_COURSE = 'ADD_COURSE'

export default (newCourse) => {
  return {
    type: ADD_COURSE,
    payload: newCourse
  }
}
