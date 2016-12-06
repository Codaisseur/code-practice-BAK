import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// Material UI Components
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'

// Styles
import './AssignmentsContainer.sass'

class AssignmentsContainer extends Component {

  renderAssignments() {
    return this.props.assignments.map((assignment) => {
      return(
        <ListItem key={assignment.id}>
          <Link to={'/'}>{assignment.title}</Link>
          <span>{assignment.progress}</span>
        </ListItem>
      )
    });
  }

  render() {
    return (
      <Card className="container-assignments">
        <CardHeader title="course.name" />
        <CardActions>
          <RaisedButton label="Start" />
        </CardActions>

        <h1>Assignments</h1>
      </div>


        <List>
          <ListItem>{this.renderAssignments()}</ListItem>
        </List>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    assignments: state.assignments
  }
}

export default connect(mapStateToProps)(AssignmentsContainer)
