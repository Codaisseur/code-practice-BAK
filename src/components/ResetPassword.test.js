import React from 'react'
import wrapper from '~/../test/component-wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { shallow, mount } from 'enzyme'
import { ResetPasswordContainer } from './ResetPassword'

chai.use(spies)
chai.use(chaiEnzyme())

const resetProps = {
  resetPassword: chai.spy(),
  clearErrors: chai.spy(),
  replace: chai.spy(),
  formErrors:{},
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
     expect(emailLabel.text()).to.equal('Email:')
   })

 it('has one input field', () => {
   expect(element.find('input')).to.have.length(1)
 })

  describe('form submission', () => {
   const resetSpy = chai.spy()

    it('should call resetPassword() upon submitting the form with values', () => {
      element.ref('email').value = 'kees@kees.nl'
      element.simulate('submit')
      expect(resetSpy).to.have.been.called.with.exactly('kees@kees.nl')
    })

    describe('formErrors', () => {
      const resetPropsWithFormError = Object.assign(resetProps, { email: ['This email address is not registered here'] })
      const element2 = wrapper(<ResetPasswordContainer { ...resetPropsWithFormError } />)

      it('shows the error', () => {
        element2.ref('email').value = 'kees@kees.nl'
        element2.simulate('submit')
        expect(resetSpy).to.have.been.called.with( ['This email address is not registered here'] )
      })
    })
  })
})
