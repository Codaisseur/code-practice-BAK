import React, { Component } from 'react'

class Assignment extends Component {
  render() {
    const { title } = this.props

    return (
        <div>
          {title}
        </div>
    )
  }
}

export default Assignment
