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
})
