import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'
import routes from '~/middleware/routes'

// Material UI
import ListItem from 'material-ui/List/ListItem'

class AssignmentLink extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title, courseId, assignmentId } = this.props
    const coursesPath = routes.coursesPath

    return (
      <Link
        to={ `${coursesPath}/${courseId}/${assignmentId}/` } >
        <ListItem>
          {title}
        </ListItem>
      </Link>
    )
  }
}

export default AssignmentLink
