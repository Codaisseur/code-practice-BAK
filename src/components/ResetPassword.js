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
};

export class ResetPasswordContainer extends Component {
  static propTypes = {
    resetPassword: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    formErrors: PropTypes.object.isRequired,
  }

  componentWillMount() {
    const { passwordIsReset, replace } = this.props
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
    const { formErrors } = this.props
    const { email } = this.refs

    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h2>Forgot your password?</h2>
        <p>
          Please submit your email address and we will try to find your account
          and send you a link to reset your password.
        </p>

        <TextField
          label='email'
          hintText="Email:"
          id="email"
          type="email"
          errorText={ formErrors.email }
          ref="email"
        />
        <br />

        <RaisedButton
          label="Log in"
          primary={true}
          href={routes.loginPath}
        />

        <RaisedButton
          label="RESET"
          labelPosition="before"
          style={styles.button}
          onClick={this.onSubmit.bind(this)}
        />
      </form>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const passwordIsReset = state.user.passwordIsReset || false
  const formErrors = state.errors || {}
  return {
    passwordIsReset,
    formErrors
  }
}

export default connect(mapStateToProps, { resetPassword, clearErrors, replace: routerActions.replace })(ResetPasswordContainer)
