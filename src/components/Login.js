import React, { Component, PropTypes } from 'react'
import { routerActions } from 'react-router-redux'
import { connect } from 'react-redux'
import Api from '~/middleware/api'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import { login } from '~/actions/user'

import './Login.sass'

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
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

function select(state, ownProps) {
  const isAuthenticated = state.user.authentication_token || false
  const redirect = ownProps.location.query.redirect || '/'
  return {
    isAuthenticated,
    redirect
  }
}

export class LoginContainer extends Component {
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
    this.props.login(this.refs.email.value, this.refs.password.value)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h2>Please sign in</h2>
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


        <RaisedButton
          label="Forgot my password"
          href="/reset-password"
          primary={true} />

        <RaisedButton
          label="Sign in"
          style={styles.button}
          onClick={this.onSubmit.bind(this)} />
      </form>
    )
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired
}

export default connect(select, { login, replace: routerActions.replace })(LoginContainer)
