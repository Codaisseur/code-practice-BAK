import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import wrapper from '~/../test/component-wrapper'
import Assignment from './Assignment'

chai.use(chaiEnzyme())

const assignment = wrapper(<Assignment title='Assignment Title' />)

describe('<Assignment />', () => {
  it('renders a title', () => {
    expect(assignment.find('h2')).to.have.text('Assignment Title')
  })
})
