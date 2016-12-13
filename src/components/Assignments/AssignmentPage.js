import React, { Component, PropTypes } from 'react'

// Material UI
import ListItem from 'material-ui/List/ListItem'

class AssignmentPage extends Component {

  render() {
    const { title, courseId, assignmentId } = this.props

    return (
      <h1>
        { title }
      </h1>
    )
  }
}

export default AssignmentPage
