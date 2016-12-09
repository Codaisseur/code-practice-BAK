import React, { Component, PropTypes } from 'react'

// Material UI
import ListItem from 'material-ui/List/ListItem'

class Assignment extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title, assignmentId } = this.props

    return (
        <ListItem
        key={ assignmentId } >
          {title}
        </ListItem>
    )
  }
}

export default Assignment
