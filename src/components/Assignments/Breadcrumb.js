import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import './Breadcrumb.sass'

import ArrowRightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

class Breadcrumb extends PureComponent {
  render() {
    return (
      <ul className="breadcrumb">
        <li>
          <Link to={ '/courses' }>Courses</Link>
        </li>
        <li>
          <ArrowRightIcon />
          {/* TODO: Make Breadcrumb render the course/assignment - once it's all connected to the API */}
          Course Name
        </li>
      </ul>
    )
  }
}

export default Breadcrumb
