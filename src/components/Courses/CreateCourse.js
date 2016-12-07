import React, { Component } from 'react'
import { connect } from 'react-redux'
import createCourse from '../../actions/courses'

export class CreateCourse extends Component {

  save(event) {
    event.preventDefault()

    const { createCourse } = this.props
    const name = this.refs.name.value

    const newCourse = {
      name: name,
    }

    createCourse(newCourse)
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

export default connect(null, { createCourse })(CreateCourse)
