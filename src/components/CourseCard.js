import React, { Component } from 'react'

// Material UI Components
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class CourseCard extends Component {
  render() {
    return (
      <Card>
      <CardMedia>
        <img src="images/nature-600-337.jpg" />
      </CardMedia>
      </Card>
    )
  }
}

export default CourseCard
