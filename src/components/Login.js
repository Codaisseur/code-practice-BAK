import React, { Component, PropTypes } from 'react'
import { routerActions } from 'react-router-redux'
import { connect } from 'react-redux'
import Api from '~/middleware/api'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { login } from '~/actions/user'

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

export class LoginContainer extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
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
    const email = this.refs.email.getValue(),
      password = this.refs.password.getValue()

    if ((!email || email === '') || (!password || password === '')) {
      return
    }

    this.props.login(email, password)
  }

  navToSignUp() {
    this.props.replace('/sign-up')
  }

  render() {
    return (
      <form className="sign-in-form" onSubmit={this.onSubmit.bind(this)}>
        <h2>Please sign in</h2>
        <TextField
          hintText="Enter your email"
          id="email"
          type="email"
          ref="email"
          value={this.props.email}
          fullWidth={true}
          hintStyle={styles.hintStyle}
          inputStyle={styles.inputStyle}
          underlineStyle={styles.underlineStyle} />
        <br />

        <TextField
          hintText="Enter your password."
          id="password"
          type="password"
          ref="password"
          value={this.props.password}
          fullWidth={true}
          hintStyle={styles.hintStyle}
          inputStyle={styles.inputStyle}
          underlineStyle={styles.underlineStyle} />
        <br />


        <Link to="/sign-up">Sign up</Link>

        <RaisedButton
          label="Sign in"
          style={styles.button}
          onClick={this.onSubmit.bind(this)}
          primary={true} />
      </form>
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  const isAuthenticated = state.user.token || false
  const redirect = ownProps.location.query.redirect || '/'
  return {
    isAuthenticated,
    redirect
  }
}

export default connect(mapStateToProps, { login, replace: routerActions.replace })(LoginContainer)
