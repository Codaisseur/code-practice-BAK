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
        <CourseCard key={ course._id } className="card" { ...course }/>
      )
    })
  }

  render() {
    return (
      <div className="container courses">
        <section className="contained heading">
          <h1>Courses</h1>
          <p>These are all the available courses. Start practicing!</p>
        </section>
        <section className="contained-grid">
          { this.renderCourses() }
        </section>

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
