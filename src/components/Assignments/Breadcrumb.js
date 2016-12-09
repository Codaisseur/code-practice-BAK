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
      </ul>
    )
  }
}

export default Breadcrumb
