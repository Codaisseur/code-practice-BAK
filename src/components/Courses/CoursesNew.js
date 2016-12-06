import React, { Component } from 'react'
import { connect } from 'react-redux'
import addCourse from '../../actions/courses'

export class CoursesNew extends Component {
  save(event) {
    event.preventDefault()

    const { addCourse } = this.props
    const name = this.refs.name.value
    const courseId = this.refs.name.value

    const newCourse = {
      name: name
    }
    addCourse(newCourse)
    console.log(newCourse)
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.save.bind(this) }>
          <h1>Create New Course</h1>
          <div>
            <input id="courseName" type="text" name="name" ref="name" placeholder="Course Name"/>
            <input id="createCourse" type="submit" value="Create Course" />
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addCourse })(CoursesNew)
