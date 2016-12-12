import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchCourses } from '~/actions/courses'
import routes from '~/middleware/routes'
import CourseCard from './CourseCard'
import NavButton from '../UI/buttons/NavButton'

const coursesPath = routes.coursesPath

class CoursesContainer extends Component {
  componentWillMount() {
    this.props.fetchCourses()
  }

  render() {
    const { courses } = this.props

    return (
      <div className="container courses">
        <section className="contained heading">
          <h1>Courses</h1>
          <p>These are all the available courses. Start practicing!</p>
        </section>
        <section className="contained-grid">
          { courses.map((course, i) => {
            return <CourseCard key={`course-${course._id}`} { ...course } />
          })}
        </section>

        <NavButton
          label="Add a New Course"
          to={ `${coursesPath}/new` }
        />

      </div>
    )
  }
}

const mapStateToProps = ({ courses }) => {
  return {
    courses,
  }
}

CoursesContainer.propTypes = {
  fetchCourses: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { fetchCourses })(CoursesContainer)
