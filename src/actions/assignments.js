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

    //JM: At this point the user should be logged in and thus be authenticated
    //JM: if the user is logged in there should be a token: Key = practice.user, else user is not logged in = not authenticated (false)
    const isAuthenticated = () => {
      const userToken = !!localStorage.getItem( 'practice.user' )
       if (userToken) {
         return true
       } else {
         return false
       }
     }

    api.service('assignments', isAuthenticated).find()
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
