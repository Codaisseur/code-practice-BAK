import React from 'react'
import wrapper from '~/../test/component-wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { SignUpContainer } from './SignUp'

chai.use(spies)
chai.use(chaiEnzyme())

const SignUpProps = {
  sign_up: chai.spy(),
  replace: chai.spy(),
 }

const sign_up = wrapper(<SignUpContainer { ...SignUpProps } />)


describe('<SignUpContainer />', () => {
  it('renders a form', () => {
    expect(sign_up.find('form')).to.have.length(1)
  })

  it('renders a form that contains certain elements', () => {
    expect(sign_up).to.have.tagName('form')
    expect(sign_up).to.have.descendants('#email')
    expect(sign_up).to.have.descendants('#password')
    expect(sign_up).to.have.descendants('#password_confirmation')
    expect(sign_up).to.have.descendants('#firstname')
    expect(sign_up).to.have.descendants('#lastname')
    expect(sign_up).to.have.descendants('h2')
    expect(sign_up).to.have.descendants('p')
  })

  it('has five input fields', () => {
    expect(sign_up.find('input')).to.have.length(5)
  })

  describe('form submission', () => {
    const SignUpSpy = chai.spy()

    it('should call sign up() upon submitting the form with values', () => {
      sign_up.ref('email').value = 'David'
      sign_up.ref('password').value = 'verysecret'
      sign_up.ref('password_confirmation').value = 'verysecret'
      sign_up.ref('firstname').value = 'John'
      sign_up.ref('lastname').value = 'Smidt'
      sign_up.simulate('submit')
      expect(SignUpSpy).to.have.been.called
        .with.exactly('David', 'verysecret', 'verysecret', 'John', 'Smidt')
    })

    it('should not call sign up() upon submitting the form without values', () => {
      SignUpSpy.reset()
      sign_up.ref('email').value = null
      sign_up.ref('password').value = null
      sign_up.ref('password_confirmation').value = 'verysecret'
      sign_up.ref('firstname').value = 'John'
      sign_up.ref('lastname').value = 'Smidt'
      sign_up.simulate('submit')
      expect(SignUpSpy).not.to.have.been.called()
    })
  })
})
