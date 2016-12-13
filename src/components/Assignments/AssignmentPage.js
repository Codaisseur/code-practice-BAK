import React, { Component, PropTypes } from 'react'
import Assignment from './Assignment'

// Material UI
import ListItem from 'material-ui/List/ListItem'

class AssignmentPage extends Component {

  render() {
    const { title, courseId, assignmentId } = this.props

    return (
      <div>
        <Assignment title='Assignment Title' instructions='Assignment instructions' />
      </div>
    )
  }
}

export default AssignmentPage
