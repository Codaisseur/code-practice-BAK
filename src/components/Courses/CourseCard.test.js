import React from 'react'
import chai, { expect } from 'chai'

import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import wrapper from '~/../test/component-wrapper'
import CourseCard from './CourseCard'

describe('<CourseCard />', () => {
  const card = wrapper(<CourseCard />)

  it('is a card', () => {
    expect(card).to.have.tagName('div')
    expect(card).to.have.className('card')
  })

  it('links to the course', () => {
    expect(card.find('.actions button div span')).to.contain.text('Go to course')
  })
})
