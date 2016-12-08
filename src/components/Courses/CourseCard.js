import React, { PureComponent } from 'react'
import routes from '~/middleware/routes'

// Styles and Material-UI
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import NavButton from '../UI/buttons/NavButton'
import './CourseCard.sass'

class CourseCard extends PureComponent {
  render() {
    const { courseId, name, description } = this.props
    const coursesPath = routes.coursesPath

    return(
      <div className="card">
        <Card key={ name }>
          <CardHeader
            className="title"
            title={ name }
          />

          <CardText>
            { description }
          </CardText>

          <CardActions className="actions">
            <NavButton
              label="Go to course"
              primary={true}
              to={ `${coursesPath}/${courseId}` }
            />
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default CourseCard
