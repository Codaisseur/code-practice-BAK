import React, { Component } from 'react'
import { connect } from 'react-redux'
import createCourse from '../../actions/courses'

export class CreateCourse extends Component {

  save(event) {
    event.preventDefault()

    const { createCourse } = this.props
    const title = this.refs.title.value
    const description = this.refs.description.value

    const newCourse = {
      title,
      description,
    }

    createCourse(newCourse)
  }

  render() {
    return (
      <form onSubmit={ this.save.bind(this) }>
        <h1>Create New Course</h1>
        <div>
          <input id="courseName" type="text" name="title" ref="title" placeholder="Course Name"/>
          <input id="courseDescription" type="text" name="description" ref="description" placeholder="Course Description"/>
          <input id="createCourse" type="submit" value="Create Course" />
        </div>
      </form>
    )
  }
}

export default connect(null, { createCourse })(CreateCourse)
