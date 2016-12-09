import React, { Component } from 'react'
import { connect } from 'react-redux'
import createCourse from '../../actions/courses'

export class CreateCourse extends Component {

  save(event) {
    event.preventDefault()

    const { createCourse } = this.props
    const title = this.refs.title.value

    const newCourse = {
      title,
    }

    createCourse(newCourse)
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.save.bind(this) }>
          <h1>Create New Course</h1>
          <div>
            <input id="courseName" type="text" name="title" ref="title" placeholder="Course Name"/>
            <input id="createCourse" type="submit" value="Create Course" />
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { createCourse })(CreateCourse)
