import React, { Component } from 'react'

// Material UI Components
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'

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
