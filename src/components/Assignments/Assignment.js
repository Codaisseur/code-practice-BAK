import React, { Component, PropTypes } from 'react'

// Material UI
import ListItem from 'material-ui/List/ListItem'

class Assignment extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title, _id } = this.props

    return (
        <ListItem
        key={ _id} >
          {title}
        </ListItem>
    )
  }
}

export default Assignment
