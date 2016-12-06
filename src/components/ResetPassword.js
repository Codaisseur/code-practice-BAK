import React, { Component, PropTypes } from 'react'
import { routerActions } from 'react-router-redux'
import { connect } from 'react-redux'
import Api from '~/middleware/api'
import routes from '~/middleware/routes'
import { Link } from 'react-router'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './ResetPassword.sass'


import { clearErrors } from '~/actions/errors'
import { resetPassword } from '~/actions/user'

// Styling for the buttons
const styles = {
  button: {
    margin: 12,
  },
  ResetPassword: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

 // end button styling

function select(state, ownProps) {
  const passwordIsReset = state.user.passwordIsReset || false
  const formErrors = state.errors || {}
  return {
    passwordIsReset,
    formErrors
  }
}

export class ResetPasswordContainer extends Component {
  componentWillMount() {
    const { passwordIsReset, replace } = this.props
    console.log(this.props)
    if (passwordIsReset) {
      replace('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    const { passwordIsReset, replace } = nextProps

    if (passwordIsReset) {
      replace('/')
    }
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.clearErrors()
    this.props.resetPassword(this.refs.email.value)
  }

  renderFormErrors(field) {
    const { formErrors } = this.props
    if (formErrors === undefined) return
    if (formErrors[field] === undefined) return

    return formErrors[field].map((error, i) => {
      return (<span key={`error-${field}-${i}`}>{field} {error}</span>)
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h2>Forgot your password?</h2>
        <p>
          Please submit your email address and we will try to find your account
          and send you a link to reset your password.
        </p>

        <TextField
          hintText="Your e-mail" id="email" type="email" ref="email"
        />
        { this.renderFormErrors('email') }
        <br/>
        <RaisedButton label="Log in" primary={true} href={routes.loginPath} />

        <RaisedButton
          label="RESET"
          labelPosition="before"
          style={styles.button}
          containerElement="label"
        >
          <input type="Submit" defaultValue="Reset password" style={styles.ResetPassword} />
        </RaisedButton>

      </form>
    )
  }
}

ResetPasswordContainer.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired
}

export default connect(select, { resetPassword, clearErrors, replace: routerActions.replace })(ResetPasswordContainer)
