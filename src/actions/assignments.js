export const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT'

export function addAssignment(description) {
  return {
    type: ADD_ASSIGNMENT,
    description
  }
}
