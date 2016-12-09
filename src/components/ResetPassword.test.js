import React from 'react'
import wrapper from '~/../test/component-wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { ResetPasswordContainer } from './ResetPassword'

chai.use(spies)
chai.use(chaiEnzyme())

const resetProps = {
  resetPassword: chai.spy(),
  clearErrors: chai.spy(),
  replace: chai.spy(),
  formErrors: {},
}

const element = wrapper(<ResetPasswordContainer { ...resetProps } />)

describe('<ResetPasswordContainer />', () => {
 it('renders a form', () => {
   expect(element.find('form')).to.have.length(1)
 })

 it('renders a form that contains certain elements', () => {
   const emailLabel = element.childAt(2)

     expect(element).to.have.tagName('form')
     expect(element).to.have.descendants('h2')
     expect(element).to.have.descendants('p')
     expect(emailLabel.text()).to.equal('Enter your email')
   })

 it('has two input fields', () => {
   expect(element.find('input')).to.have.length(1)
 })

 it('renders children when passed in', () => {
  expect(element.find('#email')).to.have.tagName('input')
  expect(element.find('#email').prop('id')).to.equal('email')
  expect(element.find('#email').prop('type')).to.equal('email')
})

  describe('form submission', () => {
    const resetProps = {
      resetPassword: chai.spy(),
      clearErrors: chai.spy(),
      replace: chai.spy(),
      email: 'kees@kees.nl',
      formErrors: {},
    }

    const element = wrapper(<ResetPasswordContainer { ...resetProps } />)

    it('should call resetPassword() upon submitting the form with values', () => {
     element.simulate('submit')
     expect(resetProps.resetPassword).to.have.been.called
       .with('kees@kees.nl')
    })

    describe('formErrors', () => {
      const resetPropsWithFormError = Object.assign(resetProps, { formErrors: {email: ['This email address is not registered here'] }} )
      const element = wrapper(<ResetPasswordContainer { ...resetPropsWithFormError } />)

      it('shows the error', () => {
        expect(element.text()).to.contain('This email address is not registered here')
      })
    })
  })
})
