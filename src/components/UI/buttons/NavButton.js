import React, { PureComponent, PropTypes } from 'react'
import { routerActions } from 'react-router-redux'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'

class NavButton extends FlatButton {
  handleNav() {
    const { navigateTo, to } = this.props
    navigateTo(to)
  }

  render() {
    const { label, fullWidth, primary, secondary } = this.props

    return (
      <FlatButton
        label={label}
        onTouchTap={ this.handleNav.bind(this) }
      />
    )
  }
}

NavButton.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired
}

export default connect(null, { navigateTo: routerActions.push })(NavButton)
