import api from '../middleware/api'
import { appLoading, appDoneLoading } from './api'

export const COURSES_LOADING = 'COURSES_LOADING'
export const COURSES_LOADED = 'COURSES_LOADED'
export const COURSES_FAILED_LOADING = 'COURSES_FAILED_LOADING'
export const COURSE_CREATED = 'COURSE_CREATED'
export const CREATE_COURSE_FAILED = 'CREATE_COURSE_FAILED'

export const fetchCourses = () => {
  return (dispatch) => {
    dispatch(appLoading())

    api.service('courses').find()
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

export const createCourse = () => {
  return (dispatch) => {
    dispatch(appLoading())

    api.service('course').create({})
      .then((data) => {
        dispatch(appDoneLoading())

        if (data.errors) {
          dispatch(createCourseFailed(data))
        } else {
          dispatch(courseCreated(data))
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

const courseCreated = (data) => {
  return {
    type: COURSE_CREATED,
    payload: data
  }
}

const createCourseFailed = (data) => {
  return {
    type: CREATE_COURSE_FAILED,
    payload: data
  }
}
