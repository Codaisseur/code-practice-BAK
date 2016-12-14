import api from '../middleware/api'
import { appLoading, appDoneLoading } from './api'

export const ASSIGNMENTS_LOADING = 'ASSIGNMENTS_LOADING'
export const ASSIGNMENTS_LOADED = 'ASSIGNMENTS_LOADED'
export const ASSIGNMENTS_FAILED_LOADING = 'ASSINGMENTS_FAILED_LOADING'
export const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT'

export function addAssignment(text) {
  return {
    type: ADD_ASSIGNMENT,
    text
  }
}

export const fetchAssignments = () => {
  return (dispatch) => {
    dispatch(appLoading)

    //J: At this point the user should be logged in and thus be authenticated
    //J: if the user is logged in there should be a JWT (token) else user is not authenticated (false)
    const authenticatedUser = () => {
      const isAuthenticated = !!state.user.token
        if (isAuthenticated) {
          return true
        } else {
          return false
        }
    }

    //J: Api should/might have a service for assignments from which we can 'find' all the assignments
    //J: and store it in data
    api.service('assignments', authenticatedUser).find()
      .then((data) => {
        dispatch(appDoneLoading())
        if (data.errors) {
          dispatch(fetchAssignmentsFailed(data))
        } else {
          dispatch(fetchAssignmentsDone(data))
        }
      })
  }

  const fetchAssignmentsFailed = (data) => {
    return {
      type: ASSIGNMENTS_FAILED_LOADING,
      payload: data
    }
  }

  const fetchAssignmentsDone = (data) => {
    return {
      type: ASSIGNMENTS_LOADED,
      payload: data
    }
  }
}
