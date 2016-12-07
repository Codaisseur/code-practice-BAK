import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// Material UI Components
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'

class AssignmentList extends Component {

  renderAssignments() {
    return this.props.assignments.map((assignment) => {
      return (
        <Card key={assignment.id}>
          <h1>{assignment.title}</h1>
          <p>{assignment.text}</p>
        </Card>
      )
    });
  }

  render() {
    return (
      <h2>{this.renderAssignments()}</h2>
    )
  }
}

function mapStateToProps(state) {
  return {
    assignments: state.assignments
  }
}

export default connect(mapStateToProps)(AssignmentList)
