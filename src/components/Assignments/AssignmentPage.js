import React, { Component, PropTypes } from 'react'
import Assignment from './Assignment'

// Styles
import './Assignments.sass'

// Material UI
import ListItem from 'material-ui/List/ListItem'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

// Components
import Breadcrumb from './Breadcrumb'


class AssignmentPage extends Component {

  renderBreadCrumb() {
    const crumbs = this.props.breadcrumb
    return <Breadcrumb { ...crumbs } />
  }

  render() {
    const { title, courseId, assignmentId } = this.props

    return (
      <div className="container assignment">
        <section className="contained heading">
          <div className="left-items-wrapper">
            <Assignment title='Assignment Title' />
            { this.renderBreadCrumb() }
          </div>
          {/* TODO: assignment status (Complete? Fail? Skippd?) */}
        </section>

        <section className="page-container">
          <Assignment instructions='Assignment Instructions bla bla' />
        </section>

        <div className="actions">
          {/* Dummy buttons for now. */}
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
