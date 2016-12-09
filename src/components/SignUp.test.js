import React from 'react'
import wrapper from '~/../test/component-wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { SignUpContainer } from './SignUp'

chai.use(spies)
chai.use(chaiEnzyme())

const SignUpProps = {
  SignUp: chai.spy(),
  replace: chai.spy(),
 }

const signUp = wrapper(<SignUpContainer { ...SignUpProps } />)


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
    const signUpSpy = chai.spy()

    it('should call sign up() upon submitting the form with values', () => {
      signUp.ref('email').value = 'david@mail.com'
      signUp.ref('password').value = 'verysecret'
      signUp.ref('password').value = 'verysecret'
      signUp.ref('firstname').value = 'John'
      signUp.ref('lastname').value = 'Smidt'
      signUp.simulate('submit')
      expect(signUpSpy).to.have.been.called
        .with.exactly('david@mail.com', 'verysecret', 'verysecret', 'John', 'Smidt')
    })

    it('should not call sign up() upon submitting the form without values', () => {
      signUpSpy.reset()
      signUp.ref('email').value = null
      signUp.ref('password').value = null
      signUp.ref('password').value = null
      signUp.ref('firstname').value = null
      signUp.ref('lastname').value = null
      signUp.simulate('submit')
      expect(signUpSpy).not.to.have.been.called()
    })
  })
})
