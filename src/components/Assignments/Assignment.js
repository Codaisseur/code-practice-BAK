import React, { Component, PropTypes } from 'react'

class Assignment extends Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  // }

  render() {
    const { title, assignmentId } = this.props

    return (
      <div>
        <h1>{ title }</h1>
      </div>
    )
  }
}

export default Assignment
