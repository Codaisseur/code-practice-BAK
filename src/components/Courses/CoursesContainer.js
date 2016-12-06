import React, { Component } from 'react'
import { connect } from 'react-redux'
import routes from '~/middleware/routes'
import CourseCard from './CourseCard'
import NavButton from '../UI/buttons/NavButton'

const coursesPath = routes.coursesPath

class CoursesContainer extends Component {
  renderCourses() {
    return this.props.courses.map((course) => {
      return (
        <CourseCard key={ course.name } className="card" { ...course }/>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Courses</h3>
        <div>
          { this.renderCourses() }
        </div>
        <NavButton
          label="Add a New Course"
          to={ `${coursesPath}/new` }
        />
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
