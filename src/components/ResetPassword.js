import React, { Component, PropTypes } from 'react'
import { routerActions } from 'react-router-redux'
import { connect } from 'react-redux'
import Api from '~/middleware/api'
import routes from '~/middleware/routes'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { resetPassword } from '~/actions/user'
import { clearErrors } from '~/actions/errors'

import './Login.sass'

const styles = {
  button: {
    margin: 12,
  },
  hintStyle: {
    color: '#757575',
    fontSize: 13,
    fontFamily: 'Poppins',
  },
  inputStyle: {
    fontSize: 13,
    fontFamily: 'Poppins',
  },
  underlineStyle: {
    borderColor: 'rgba(117, 117, 117, 0.5)',
  }
}

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
    this.props.resetPassword(this.refs.email.getValue())
  }

  render() {
    const { formErrors } = this.props

    return (
      <form className="reset-password-form" onSubmit={this.onSubmit.bind(this)}>
        <h2>Forgot your password?</h2>
        <p>
          Please submit your email address and we will try to find your account
          and send you a link to reset your password.
        </p>

        <TextField
          hintText="Enter your email"
          id="email"
          type="email"
          ref="email"
          value={this.props.email}
          fullWidth={true}
          hintStyle={styles.hintStyle}
          inputStyle={styles.inputStyle}
          errorText={formErrors.email}
          underlineStyle={styles.underlineStyle} />
        <br />

        <Link to="/login">Sign in</Link>

        <RaisedButton
          label="Reset password"
          style={styles.button}
          onClick={this.onSubmit.bind(this)}
          primary={true} />
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const passwordIsReset = state.user.passwordIsReset || false
  const formErrors = state.errors || {}
  return {
    passwordIsReset,
    formErrors
  }
}

export default connect(mapStateToProps, { resetPassword, clearErrors, replace: routerActions.replace })(ResetPasswordContainer)
