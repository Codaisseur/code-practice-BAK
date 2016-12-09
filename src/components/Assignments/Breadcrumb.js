import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import './Breadcrumb.sass'

class Breadcrumb extends PureComponent {
  render() {
    return (
      <ul className="breadcrumb">
        <li>
          <Link to={ '/courses' }>Courses</Link>
        </li>
        {/* TODO: Make Breadcrumb render the course/assignment - once it's all connected to the API */}
      </ul>
    )
  }
}

export default Breadcrumb
