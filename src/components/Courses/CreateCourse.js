import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createCourse } from '../../actions/courses'

export class CreateCourse extends Component {
  static propTypes = {
    createCourse: PropTypes.func.isRequired,
  }

  save(event) {
    event.preventDefault()

    const { createCourse } = this.props
    const { title, description } = this.refs

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
          <input id="courseName" type="text" value={this.props.title} ref="title" placeholder="Course Name"/>
          <input id="courseDescription" type="text" value={this.props.description} ref="description" placeholder="Course Description"/>
          <input id="createCourse" type="submit" value="Create Course" />
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({ title, description }) => {
  return {
    title,
    description
  }
}

export default connect(mapStateToProps, { createCourse })(CreateCourse)
