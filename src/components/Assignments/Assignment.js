import React, { Component, PropTypes } from 'react'

class Assignment extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title, description, assignmentId } = this.props

    return (
      <div>
      <h1>{title}</h1>
      <p>{description}</p>
      </div>
    )
  }
}

export default Assignment
