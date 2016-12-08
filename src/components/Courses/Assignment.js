import React, { Component, PropTypes } from 'react'

class Assignment extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

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
