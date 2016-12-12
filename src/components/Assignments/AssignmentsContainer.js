import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Api from '~/middleware/api'
import routes from '~/middleware/routes'
import { Link } from 'react-router'
import { assignments } from '~/actions/assignments'
// Styles
import './AssignmentsContainer.sass'

// Components
import Assignment from './Assignment'
import Breadcrumb from './Breadcrumb'

// Material UI
import LinearProgress from 'material-ui/LinearProgress'

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

  renderBreadCrumb() {
    const crumbs = this.props.breadcrumb
    return <Breadcrumb { ...crumbs } />
  }

  render() {
    const { progress } = this.props

    return (
      <div className="container assignment">
        <section className="contained heading">
          <div className="left-items-wrapper">
            <h1>Course Title</h1>
            { this.renderBreadCrumb() }
          </div>

          <div className="score-wrapper">
            <LinearProgress
            className="progress-bar"
            mode="determinate"
            value={progress || 0 }
            />
            <p className="percentage">{`${progress || 0}`}%</p>
          </div>
        </section>

        <section className="page-container">
          <main className="contained page-content">
            {this.renderAssignments() }
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
