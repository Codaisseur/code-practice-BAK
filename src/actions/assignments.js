import api from '../middleware/api'
import { appLoading, appDoneLoading } from './api'

export const ASSIGNMENTS_LOADING = 'ASSIGNMENTS_LOADING'
export const ASSIGNMENTS_LOADED = 'ASSIGNMENTS_LOADED'
export const ASSIGNMENTS_FAILED_LOADING = 'ASSINGMENTS_FAILED_LOADING'
export const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT'
export const USER_NOT_AUTHENTICATED = 'USER_NOT_AUTHENTICATED'

export const fetchAssignments = () => {
  //JM: At this point the user should be logged in and thus be authenticated
  //JM: if the user is logged in there should be a token: Key = practice.user, else user is not logged in = not authenticated (false)
  const isAuthenticated = !!localStorage.getItem( 'practice.user' )

  return (dispatch) => {
    dispatch(appLoading())

    if (isAuthenticated) {
      api.service('assignments').find()
        .then((data) => {
          dispatch(appDoneLoading())
          if (data.errors) {
            dispatch(fetchAssignmentsFailed(data))
          } else {
            dispatch(fetchAssignmentsDone(data))
          }
      } )
    } else {
      dispatch(appDoneLoading())
      dispatch(userNotAuthenticated(isAuthenticated))
    }
  }
}

const userNotAuthenticated = (isAuthenticated) => {
  return {
    type: USER_NOT_AUTHENTICATED,
    payload: isAuthenticated // false
  }
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

export function addAssignment(text) {
  return {
    type: ADD_ASSIGNMENT,
    text
  }
}
