import api from '../middleware/api'
import { appLoading, appDoneLoading } from './api'

export const COURSES_LOADING = 'COURSES_LOADING'
export const COURSES_LOADED = 'COURSES_LOADED'
export const COURSES_FAILED_LOADING = 'COURSES_FAILED_LOADING'
export const CREATE_COURSE = 'CREATE_COURSE'

export const fetchCourses = () => {
  return (dispatch) => {
    dispatch(appLoading())

    api.get('/courses')
      .then((data) => {
        dispatch(appDoneLoading())

        if (data.errors) {
          dispatch(fetchCoursesFailed(data))
        } else {
          dispatch(fetchCoursesDone(data))
        }
      })
  }
}

const fetchCoursesDone = (data) => {
  return {
    type: COURSES_LOADED,
    payload: data
  }
}

const fetchCoursesFailed = (data) => {
  return {
    type: COURSES_FAILED_LOADING, 
    payload: data
  }
}

export default (newCourse) => {
  return {
    type: CREATE_COURSE,
    payload: newCourse
  }
}
