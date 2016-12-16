import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import ArrowRightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import './Breadcrumb.sass'

class Breadcrumb extends PureComponent {
  render() {
    return (
      <ul className="breadcrumb">
        <li>
          <Link to={ '/courses' }>Courses</Link>
          <ArrowRightIcon />
        </li>
        {/* TODO: Make Breadcrumb render the course/assignment - once it's all connected to the API */}
      </ul>
    )
  }
}

export default Breadcrumb
