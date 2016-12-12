export const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT'

export function addAssignment(assignment) {
  return {
    type: ADD_ASSIGNMENT,
    payload: assignment
  }
}
