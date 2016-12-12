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

    api.get('/courses/courseId/assignmentId')
      .then((data) => {
        dispatch(appDoneLoading())

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
