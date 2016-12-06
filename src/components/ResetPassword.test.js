import React from 'react'
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
chai.use(spies)
chai.use(chaiEnzyme())

import { ResetPasswordContainer } from './ResetPassword'

describe('<ResetPasswordContainer />', () => {
 const wrapper = shallow(<ResetPasswordContainer />)

 it('renders a form', () => {
   expect(wrapper.find('form')).to.have.length(1)
 })

 it('renders a form that contains certain elements', () => {
   const emailLabel = wrapper.childAt(2)

   expect(wrapper).to.have.tagName('form')
   expect(wrapper).to.have.descendants('h2')
   expect(wrapper).to.have.descendants('p')
   expect(emailLabel.text()).to.equal('Email:')
 })

 it('has two input fields', () => {
   expect(wrapper.find('input')).to.have.length(2)
 })

 it('renders children when passed in', () => {
   const wrapper = mount(<ResetPasswordContainer />)
   expect(wrapper.ref('email')).to.have.tagName('input')
   expect(wrapper.ref('email').prop('id')).to.equal('email')
   expect(wrapper.ref('email').prop('type')).to.equal('email')
 })

 it('should have props for replace', () => {
   expect(wrapper.props().ResetPassword).to.be.defined
 })

 describe('form submission', () => {
   const resetSpy = chai.spy()
   const wrapper = mount(<ResetPasswordContainer resetPassword={resetSpy} clearErrors={resetSpy} />)

   it('should call resetPassword() upon submitting the form with values', () => {
     wrapper.ref('email').get(0).value = 'kees'
     wrapper.simulate('submit')
     expect(wrapper.props().resetPassword).to.have.been.called()
       .with.exactly('kees')
   })
 })
})
