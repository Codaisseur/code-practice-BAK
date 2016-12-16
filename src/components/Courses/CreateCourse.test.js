import React from 'react'
import wrapper from '~/../test/component-wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { CreateCourse } from './CreateCourse'

chai.use(spies)
chai.use(chaiEnzyme())

const createCourseProps = {
  createCourse: chai.spy(),
}

const createCourse = wrapper(<CreateCourse { ...createCourseProps } />)

describe('CreateCourse />', () => {
  it('renders a form with a card', () => {
    expect(createCourse.find('form')).to.have.length(1)
    expect(createCourse.find('form')).to.have.descendants('Card')
  })

  it('renders a form that contains certain elements', () => {
    expect(createCourse).to.have.tagName('form')
    expect(createCourse).to.have.descendants('#courseName')
    expect(createCourse).to.have.descendants('#courseDescription')
    expect(createCourse).to.have.descendants('#createCourse')
  })

  it('has two input fields', () => {
    expect(createCourse.find('input')).to.have.length(2)
  })

  it('has a button', () => {
    expect(createCourse.find('RaisedButton')).to.have.text('Create Course')
  })
})
