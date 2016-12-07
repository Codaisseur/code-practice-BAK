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
      <div className="container assignment">

        <section className="contained heading">
          <div className="left-items-wrapper">
            <h1>Course Title</h1>
            <h3>bread crumbs > crumb > crumb</h3>
          </div>

          <div className="right-items-wrapper">
            <div className="score-wrapper">
              <h3 className="progress-bar">LinearProgress bar</h3>
              <p className="percentage">0%</p>
            </div>
          </div>
        </section>

        <section className="page-container">
          <h1>Assignments Sidebar</h1>
          <main className="contained page-content">
            {this.renderAssignments()}
          </main>
        </section>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    assignments: state.assignments
  }
}

export default connect(mapStateToProps)(AssignmentsContainer)
