import React from 'react'
import wrapper from '~/../test/component-wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { LoginContainer } from './Login'

chai.use(spies)
chai.use(chaiEnzyme())

const loginProps = {
  login: chai.spy(),
  replace: chai.spy(),
  email: 'student@email.com',
  password: 'verysecret',
}

const element = wrapper(<LoginContainer { ...loginProps } />)


describe('<LoginContainer />', () => {
  it('renders a form', () => {
    expect(element.find('form')).to.have.length(1)
  })

  it('renders a form that contains certain elements', () => {
    expect(element).to.have.tagName('form')
    expect(element).to.have.descendants('#email')
    expect(element).to.have.descendants('#password')
  })

  it('has two input fields', () => {
    expect(element.find('input')).to.have.length(2)
  })

  describe('form submission', () => {
    it('should call login() upon submitting the form with values', () => {
      element.simulate('submit')
      expect(loginProps.login).to.have.been.called
        .with('student@email.com', 'verysecret')
    })

    it('should not call login() upon submitting the form without values', () => {
      const loginProps = {
        login: chai.spy(),
        replace: chai.spy(),
        email: '',
        password: '',
      }

      const element = wrapper(<LoginContainer { ...loginProps } />)

      element.simulate('submit')
      expect(loginProps.login).not.to.have.been.called()
    })
  })
})
