import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import wrapper from '~/../test/component-wrapper'
import AssignmentPage from './AssignmentPage'

chai.use(chaiEnzyme())

const assignment = wrapper(<AssignmentPage title='Assignment Title' />)

describe('<AssignmentPage />', () => {
  it('renders a title', () => {
    expect(assignment.find('h1')).to.have.text('Assignment Title')
  })
})
