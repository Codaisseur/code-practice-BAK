import React, { Component, PropTypes } from 'react'
import Assignment from './Assignment'

// Material UI
import ListItem from 'material-ui/List/ListItem'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

class AssignmentPage extends Component {

  render() {
    const { title, courseId, assignmentId } = this.props

    return (
      <div>
        <Assignment title='Assignment Title' instructions='Assignment instructions' />
        <div className="actions">
          {/* Dummy buttons for now.  */}
          <FlatButton
            label="Hint"
          />
          <FlatButton
           label="Skip"
          />
          <RaisedButton
            label="Submit"
            secondary={true}
          />
        </div>
      </div>
    )
  }
}

export default AssignmentPage
