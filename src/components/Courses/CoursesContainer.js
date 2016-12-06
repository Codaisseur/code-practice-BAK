import React, { Component } from 'react'
import { connect } from 'react-redux'
import routes from '~/middleware/routes'

import NavButton from '../UI/buttons/NavButton'
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'

import './CourseCard.sass'

class CoursesContainer extends Component {
  renderCourses() {

    const coursesPath = routes.coursesPath

    return this.props.courses.map((course) => {
      return (
        <Card key={ course.name } className="card">
          <CardHeader
            className="title"
            title={course.name}
          />

          <CardText>
            Random description
          </CardText>

          <CardActions className="actions">
            <NavButton
              label="Go to course"
              to={ `${coursesPath}/${course.courseId}` }
            />
            {this.props.cardAction}
          </CardActions>
        </Card>
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
