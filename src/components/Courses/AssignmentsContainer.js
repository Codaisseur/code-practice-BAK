import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import routes from '~/middleware/routes'
import { Link } from 'react-router'

// Styles
import './AssignmentsContainer.sass'

// Components
import Assignment from './Assignment'

class AssignmentsContainer extends Component {
  static propTypes = {
    assignments: PropTypes.array.isRequired,
  }

  renderAssignments() {
    return this.props.assignments.map((assignment) => {
      return (
        <Assignment key={assignment.assignmentId} { ...assignment }/>
      )
    })
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
