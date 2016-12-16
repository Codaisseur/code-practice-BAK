import React from 'react'
import wrapper from '~/../test/component-wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'

import CoursesContainer from './CoursesContainer'

chai.use(chaiEnzyme())

describe('<CoursesContainer />', () => {
  const container = wrapper(<CoursesContainer />)

  it('renders a div with a className', () => {
    expect(container).to.have.tagName('div')
    expect(container).to.have.className('container-courses')
  })

  it('while api not hooked up it does not render a list of coursecards', () => {
    expect(container.find('CourseCard')).to.have.length(0)
  })
})
