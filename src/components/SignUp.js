import React, { Component, PropTypes } from 'react'
import { routerActions } from 'react-router-redux'
import { connect } from 'react-redux'
import Api from '~/middleware/api'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import { sign_up } from '~/actions/user'

const styles = {
  button: {
    margin: 12,
  },
};

function select(state, ownProps) {
  const isAuthenticated = state.user.authentication_token || false
  const redirect = ownProps.location.query.redirect || '/'
  return {
    isAuthenticated,
    redirect
  }
}

export class SignUpContainer extends Component {
  static propTypes = {
  sign_up: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
}


  componentWillMount() {
    const { isAuthenticated, replace, redirect } = this.props
    if (isAuthenticated) {
      replace(redirect)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isAuthenticated, replace, redirect } = nextProps
    const { isAuthenticated: wasAuthenticated } = this.props

    if (!wasAuthenticated && isAuthenticated) {
      replace(redirect)
    }
  }


  onSubmit(e) {
    e.preventDefault()
    if ((!this.refs.email.value || this.refs.email.value === '') || (!this.refs.password.value || this.refs.password.value === '')) {
      return
    }
    this.props.sign_up(this.refs.email.value, this.refs.password.value)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h2>Please sign up</h2>
        <TextField
          hintText="Enter your email"
          id="email"
          type="email"
          ref="email" />
        <br />

        <TextField
          hintText="Enter your password."
          id="password"
          type="password"
          ref="password" />
        <br />

        <TextField
          hintText="Password confirmation"
          id="password_confirmation"
          type="password_confirmation"
          ref="password_confirmation" />
        <br />

        <TextField
          hintText="First name"
          id="firstname"
          type="firstname"
          ref="firstname" />
        <br />

        <TextField
          hintText="Last name"
          id="lastname"
          type="lastname"
          ref="lastname" />
        <br />

        <RaisedButton
          label="Log in"
          href="/login"
          primary={true} />

        <RaisedButton
          label="Sign up"
          style={styles.button}
          onClick={this.onSubmit.bind(this)} />
      </form>
    )
  }
}
SignUpContainer.propTypes = {
  sign_up: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired
}

export default connect(select, { sign_up, replace: routerActions.replace })(SignUpContainer)
