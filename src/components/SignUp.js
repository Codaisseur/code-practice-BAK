import React, {Component, PropTypes} from 'react'
import {routerActions} from 'react-router-redux'
import {connect} from 'react-redux'
import Api from '~/middleware/api'
import {Link} from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import {SignUp} from '~/actions/user'

import './SignUp.sass'

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

function select(state, ownProps) {
    const isAuthenticated = state.user.authentication_token || false
    const redirect = ownProps.location.query.redirect || '/'
    return {isAuthenticated, redirect}
}

export class SignUpContainer extends Component {
    static propTypes = {
        SignUp: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
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
        const {email, password, passwordConfirmation, firstname, lastname} = this.refs
        this.props.SignUp({
          email: email.getValue(),
          password: password.getValue(),
          password_confirmation: passwordConfirmation.getValue(),
          firstname: firstname.getValue(),
          lastname: lastname.getValue()})
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
                  fullWidth={true}
                  hintStyle={styles.hintStyle}
                  inputStyle={styles.inputStyle}
                  underlineStyle={styles.underlineStyle}
                  errorText={errors && errors.password_confirmation}/>
                <br/>

                <div className="actions">
                    <RaisedButton
                      label="Log in"
                      href="/login"
                      primary={true}/>

                    <RaisedButton
                      label="Sign up"
                      style={styles.button}
                      onClick={this.onSubmit.bind(this)}/>
                </div>
            </form>
        )
    }
}

export default connect(select, {SignUp, replace: routerActions.replace})(SignUpContainer)
