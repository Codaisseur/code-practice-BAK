import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import wrapper from '~/../test/component-wrapper'
import spies from 'chai-spies'
import { Assignment } from './Assignment'

chai.use(spies)
chai.use(chaiEnzyme())

const onSkip = chai.spy()
const assignment = { title: 'assignment title', description: 'assignment description' }
const testassignment = wrapper(<Assignment testassignment={ assignment } />)

describe('<Assignment />', () => {
  it('renders a title and content', () => {
    expect(testassignment.find('h1')).to.have.text('assignment title')
    expect(testassignment.find('p')).to.have.text('some assignment')
  })
})
