import React from 'react'
import wrapper from '~/../test/component-wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { SignUpContainer } from './SignUp'

chai.use(spies)
chai.use(chaiEnzyme())

const signUpProps = {
  signUp: chai.spy(),
  appError: chai.spy(),
  replace: chai.spy(),
 }

const signUp = wrapper(<SignUpContainer { ...signUpProps } />)

describe('<SignUpContainer />', () => {
  it('renders a form', () => {
    expect(signUp.find('form')).to.have.length(1)
  })

  it('renders a form that contains certain elements', () => {
    expect(signUp).to.have.tagName('form')
    expect(signUp).to.have.descendants('#email')
    expect(signUp).to.have.descendants('#password')
    expect(signUp).to.have.descendants('#password')
    expect(signUp).to.have.descendants('#firstname')
    expect(signUp).to.have.descendants('#lastname')
    expect(signUp).to.have.descendants('h1')
    expect(signUp).to.have.descendants('p')
  })

  it('has five input fields', () => {
    expect(signUp.find('input')).to.have.length(5)
  })

  describe('form submission', () => {
    const signUpProps = {
      signUp: chai.spy(),
      appError: chai.spy(),
      replace: chai.spy(),
      email: 'jane@email.com',
      password: 'verysecret',
      passwordConfirmation: 'verysecret',
      firstname: 'Jane',
      lastname: 'Schmidt'
     }

    const signUp = wrapper(<SignUpContainer { ...signUpProps } />)

    it('should call signup() upon submitting the form with values', () => {
      signUp.simulate('submit')
      const { email, password, firstname, lastname } = signUpProps
      expect(signUpProps.signUp).to.have.been.called
        .with({ email, password, firstname, lastname })
    })

    context('When the passwords do not match', () => {
      const signUpProps = {
        signUp: chai.spy(),
        appError: chai.spy(),
        replace: chai.spy(),
        email: 'jane@email.com',
        password: 'verysecret',
        passwordConfirmation: 'verysomethingelse!',
        firstname: 'Jane',
        lastname: 'Schmidt'
       }

      const signUp = wrapper(<SignUpContainer { ...signUpProps } />)

      it('submitting the form should not call signUp()', () => {
        signUp.simulate('submit')
        expect(signUpProps.appError).to.have.been.called()
        expect(signUpProps.signUp).not.to.have.been.called()
      })
    })
  })
})
