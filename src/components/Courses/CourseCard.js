import React, { PureComponent } from 'react'
import routes from '~/middleware/routes'

// Styles and Material-UI
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import NavButton from '../UI/buttons/NavButton'
import './CourseCard.sass'

class CourseCard extends PureComponent {
  render() {
    const { courseId, name } = this.props
    const coursesPath = routes.coursesPath

    return(
      <Card key={ name } className="card">
        <CardHeader
          className="title"
          title={ name }
        />

        <CardText>
          Random description
        </CardText>

        <CardActions className="actions">
          <NavButton
            label="Go to course"
            to={ `${coursesPath}/${courseId}` }
          />
          {this.props.cardAction}
        </CardActions>
      </Card>
    )
  }
}

export default CourseCard
