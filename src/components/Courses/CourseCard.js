import React, { PureComponent, PropTypes } from 'react'
import routes from '~/middleware/routes'

// Styles and Material-UI
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import NavButton from '../UI/buttons/NavButton'
import './CourseCard.sass'

class CourseCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    const { _id, title, description } = this.props
    const coursesPath = routes.coursesPath

    return(
      <div className="card">
        <Card key={ _id }>
          <CardHeader
            className="title"
            title={ title }
          />

          <CardText>
            { description }
          </CardText>

          <CardActions className="actions">
            <NavButton
              label="Go to course"
              primary={true}
              to={ `${coursesPath}/${_id}` }
            />
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default CourseCard
