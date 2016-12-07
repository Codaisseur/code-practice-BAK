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

 it('has two input fields', () => {
   expect(element.find('input')).to.have.length(2)
 })

 it('renders children when passed in', () => {
  const wrapper = mount(<ResetPasswordContainer {...resetProps} />)
  expect(wrapper.ref('email')).to.have.tagName('input')
  expect(wrapper.ref('email').prop('id')).to.equal('email')
  expect(wrapper.ref('email').prop('type')).to.equal('email')
})

  describe('form submission', () => {
   const resetSpy = chai.spy()

    it('should call resetPassword() upon submitting the form with values', () => {
     element.ref('email').value = 'kees@kees.nl'
     element.simulate('submit')
     expect(resetSpy).to.have.been.called
       .with.exactly('kees@kees.nl')
    })
  })
})
