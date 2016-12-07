export const CREATE_COURSE = 'CREATE_COURSE'

export default (newCourse) => {
  return {
    type: CREATE_COURSE,
    payload: newCourse
  }
}
