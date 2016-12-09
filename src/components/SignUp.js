import React, {Component, PropTypes} from 'react'
import {routerActions} from 'react-router-redux'
import {connect} from 'react-redux'
import Api from '~/middleware/api'
import {Link} from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { signUp } from '~/actions/user'
import { appError } from '~/actions/errors'

import './Login.sass'

const styles = {
    button: {
        margin: 12
    },
    hintStyle: {
        color: '#757575',
        fontSize: 13,
        fontFamily: 'Poppins'
    },
    inputStyle: {
        fontSize: 13,
        fontFamily: 'Poppins'
    },
    underlineStyle: {
        borderColor: 'rgba(117, 117, 117, 0.5)'
    }
}

export class SignUpContainer extends Component {
    static propTypes = {
        signUp: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired,
        appError: PropTypes.func.isRequired,
    }

    componentWillMount() {
        const {isAuthenticated, replace, redirect} = this.props
        if (isAuthenticated) {
            replace(redirect)
        }
    }

    componentWillReceiveProps(nextProps) {
        const {isAuthenticated, replace, redirect} = nextProps
        const {isAuthenticated: wasAuthenticated} = this.props

        if (!wasAuthenticated && isAuthenticated) {
            replace(redirect)
        }
    }

    onSubmit(e) {
      e.preventDefault()
      const { appError, signUp } = this.props
      const { email, password, passwordConfirmation,
        firstname, lastname } = this.refs

      const emailValue = email.getValue(),
        passwordValue = password.getValue(),
        passwordConfirmationValue = passwordConfirmation.getValue(),
        firstnameValue = firstname.getValue(),
        lastnameValue = lastname.getValue()

      if (passwordValue !== passwordConfirmationValue) {
        appError({ passwordConfirmation: 'Passwords do not match!' })
        return
      }

      signUp({
        email: emailValue,
        password: passwordValue,
        firstname: firstnameValue,
        lastname: lastnameValue,
      })
    }

    navToLogIn() {
      this.props.replace('/login')
    }

    render() {
        const {errors} = this.props

        return (
            <form className="signup-form" onSubmit={this.onSubmit.bind(this)}>
                <h1>Codaisseur Practice</h1>
                <p>Your learning journey starts here.</p>
                {errors && <div className="form-error"></div>}

                <TextField
                  hintText="First name"
                  id="firstname"
                  type="firstname"
                  ref="firstname"
                  value={this.props.firstname}
                  fullWidth={true}
                  hintStyle={styles.hintStyle}
                  inputStyle={styles.inputStyle}
                  underlineStyle={styles.underlineStyle}/>
                <br/>

                <TextField
                  hintText="Last name"
                  id="lastname"
                  type="lastname"
                  ref="lastname"
                  value={this.props.lastname}
                  fullWidth={true}
                  hintStyle={styles.hintStyle}
                  inputStyle={styles.inputStyle}
                  underlineStyle={styles.underlineStyle}/>
                <br/>

                <TextField
                  hintText="Your email"
                  id="email"
                  type="email"
                  ref="email"
                  value={this.props.email}
                  fullWidth={true}
                  hintStyle={styles.hintStyle}
                  inputStyle={styles.inputStyle}
                  underlineStyle={styles.underlineStyle}
                  errorText={errors && errors.email}/>
                <br/>

                <TextField
                  hintText="Your password"
                  id="password"
                  type="password"
                  ref="password"
                  value={this.props.password}
                  fullWidth={true}
                  hintStyle={styles.hintStyle}
                  inputStyle={styles.inputStyle}
                  underlineStyle={styles.underlineStyle}
                  errorText={errors && errors.password}/>
                <br/>

                <TextField
                  hintText="Password confirmation"
                  id="password_confirmation"
                  type="password"
                  ref="passwordConfirmation"
                  value={this.props.passwordConfirmation}
                  fullWidth={true}
                  hintStyle={styles.hintStyle}
                  inputStyle={styles.inputStyle}
                  underlineStyle={styles.underlineStyle}
                  errorText={errors && errors.passwordConfirmation}/>
                <br/>

                <div className="actions">
                    <Link to="/login">Log in</Link>

                    <RaisedButton
                      label="Sign up"
                      style={styles.button}
                      onClick={this.onSubmit.bind(this)}
                      primary={true} />
                </div>
            </form>
        )
    }
}

const mapStateToProps = ({ user, errors }, ownProps) => {
    const isAuthenticated = user.token || false
    const redirect = ownProps.location.query.redirect || '/'
    return { isAuthenticated, redirect, errors }
}

export default connect(mapStateToProps, {signUp, appError, replace: routerActions.replace})(SignUpContainer)
