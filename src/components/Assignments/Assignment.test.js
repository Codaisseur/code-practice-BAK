import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import wrapper from '~/../test/component-wrapper'
import Assignment from './Assignment'

chai.use(chaiEnzyme())

const assignment = wrapper(<Assignment title='assignment title' />)

describe('<Assignment />', () => {
  it('renders a title', () => {
    expect(assignment.find('h1')).to.have.text('assignment title')
  })
})
