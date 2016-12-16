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
    //J: if the user is logged in there should be a token: Key = practice.user, else user is not logged in = not authenticated (false)
  const authenticatedUser = () => {
    const userToken = !!localStorage.getItem( 'practice.user' )
     if (userToken) {
       return true
     } else {
       return false
     }
   }

// OR
//J: getting the token out of localStorage and then read it
//J: to get the user ID in the token and compare it with the user ID in the redux store

// const authenticatedUser = () => {
//   const userToken = JSON.parse( localStorage.getItem( 'practice.user' ) )
//     if (userToken._id === user._id) {
//       return true
//     } else {
//       return false
//     }
//   }

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
