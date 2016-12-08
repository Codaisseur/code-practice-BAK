import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import Footer from './Footer'

const footer = shallow(<Footer />)

describe('<Footer/>', () => {
  it('contains a footer tag with class footer', () => {
    expect(footer).to.have.tagName('footer')
    expect(footer).to.have.className('footer')
  })
})
