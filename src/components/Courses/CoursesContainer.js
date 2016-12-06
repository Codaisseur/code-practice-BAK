import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class CoursesContainer extends Component {
  renderCourses() {
    return this.props.courses.map((course) => {
      return (
        <Link to={ 'courses/' + course.courseId } key={ course.courseId }>
          <li>{ course.name }</li>
        </Link>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Courses</h3>
        <ul>
          { this.renderCourses() }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CoursesContainer)
