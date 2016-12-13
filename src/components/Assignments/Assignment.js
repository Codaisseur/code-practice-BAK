import React, { Component, PropTypes } from 'react'

class Assignment extends Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  // }

  render() {
    const { title, assignmentId } = this.props

    return (
      <div>
        <h1>Assignment Title</h1>
      </div>
    )
  }
}

export default Assignment
