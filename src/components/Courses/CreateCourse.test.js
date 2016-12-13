import React from 'react'
import wrapper from '~/../test/component-wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { CreateCourse } from './CreateCourse'

chai.use(spies)
chai.use(chaiEnzyme())

const createCourseProps = {
  newCourse: chai.spy()
}

const createCourse = wrapper(<CreateCourse { ...createCourseProps } />)

describe('CreateCourse />', () => {
  it('renders a form', () => {
    expect(createCourse.find('form')).to.have.length(1)
  })

  it('renders a form that contains certain elements', () => {
    expect(createCourse).to.have.tagName('form')
    expect(createCourse).to.have.descendants('#courseName')
    expect(createCourse).to.have.descendants('#courseDescription')
    expect(createCourse).to.have.descendants('#createCourse')
  })
})
