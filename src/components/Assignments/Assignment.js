import React, { Component, PropTypes } from 'react'

class Assignment extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title, courseId, assignmentId, instructions } = this.props

    return (
      <div className="assignment">
        <h1>{title}</h1>
        <p>{instructions}</p>
      </div>
    )
  }
}

export default Assignment
