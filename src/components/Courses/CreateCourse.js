import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createCourse } from '../../actions/courses'

// Mui components
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Card from 'material-ui/Card'
import './CreateCourse'

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
        <Card>
          <TextField
            id="courseName"
            type="text"
            value={this.props.title}
            ref="title"
            placeholder="Course Name" />
          <br/>

          <TextField
            id="courseDescription"
            type="text"
            value={this.props.description}
            ref="description"
            placeholder="Course Description" />
          <br/>

          <RaisedButton
            id="createCourse"
            type="submit"
            label="Create Course"
            value="Create Course" />
        </Card>
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
