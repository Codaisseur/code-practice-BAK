import React, { Component } from 'react'

class Assignment extends Component {
  render() {
    const { assignmentId, title, text } = this.props

    return (
        <div>
          {title}
        </div>
    )
  }
}

export default Assignment
