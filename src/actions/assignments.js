import api from '../middleware/api'
import { appLoading, appDoneLoading } from './api'

export const ASSIGNMENTS_LOADING = 'ASSIGNMENTS_LOADING'
export const ASSIGNMENTS_LOADED = 'ASSIGNMENTS_LOADED'
export const ASSIGNMENST_FAILED_LOADING = 'ASSINGMENST_FAILED_LOADING'
export const CREATE_ASSIGNMENT = 'CREATE_ASSIGNMENT'

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

    // Api should/might have a service for assignments from which we can 'find' all the assignments
    // and store it in data
    // authenticate User is now hardcoded to "true"
    api.service('assignments', true).find()
      .then((data) => {
        dispatch(appDoneLoading())
        console.log(data)
        if (data.errors) {
          dispatch(fetchAssignmentsFailed(data))
        } else {
          dispatch(fetchAssignmentsDone(data))
        }
      })
  }

  const fetchAssignmentsDone = (data) => {
    return {
      type: ASSIGNMENTS_LOADED,
      payload: data
    }
  }
}
