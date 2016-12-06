import React from 'react'
import wrapper from '~/../test/component-wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'

chai.use(spies)
chai.use(chaiEnzyme())

import { LoginContainer } from './Login'


describe('<LoginContainer />', () => {
  const login = wrapper(<LoginContainer />)

  it('renders a form', () => {
    expect(login.find('form')).to.have.length(1)
  })

  it('renders a form that contains certain elements', () => {
    expect(login).to.have.tagName('form')
    expect(login).to.have.descendants('#email')
    expect(login).to.have.descendants('#password')
  })

  it('has three input fields', () => {
    expect(login.find('input')).to.have.length(2)
  })

  describe('form submission', () => {
    const loginSpy = chai.spy()
    const login = wrapper(<LoginContainer login={loginSpy} />)

    it('should call login() upon submitting the form with values', () => {
      login.ref('email').value = 'David'
      login.ref('password').value = 'verysecret'
      login.simulate('submit')
      expect(loginSpy).to.have.been.called
        .with.exactly('David', 'verysecret')
    })

    it('should not call login() upon submitting the form without values', () => {
      loginSpy.reset()
      login.ref('email').value = null
      login.ref('password').value = null
      login.simulate('submit')
      expect(loginSpy).not.to.have.been.called()
    })
  })
})
