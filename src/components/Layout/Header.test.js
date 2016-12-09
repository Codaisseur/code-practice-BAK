import React from 'react'
import chai, { expect } from 'chai'

import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import wrapper from '~/../test/component-wrapper'
import { Header } from './Header'

const headerProps = {
  logout: chai.spy(),
  navigateTo: chai.spy(),
  signedIn: true,
 }

 const props = (overrideProps) => {
   return Object.assign({}, {
     logout: chai.spy(),
     navigateTo: chai.spy(),
     user: {},
   }, overrideProps || {})
 }

 const element = wrapper(<Header { ...headerProps } />)


describe('<Header/>', () => {
  it('contains a header', () => {
    expect(element).to.have.tagName('header')
    expect(element).to.have.className('header')
  })

  it('does not render the Admin menu', () => {
    expect(element.find('.AdminMenu').length).to.equal(0)
  })

  context('for Admins', () => {
    const Admin = wrapper(<Header { ...props({adminAvailable: true}) } />)

    it('renders the Admin menu', () => {
      expect(Admin.find('.AdminMenu').length).to.equal(1)
    })
  })
})
