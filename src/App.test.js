import React from 'react'
import wrapper from '~/../test/component-wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { App } from './App'

chai.use(chaiEnzyme())

const element = wrapper(<App />)

describe('<App />', () => {
  it('has a wrapping div tag', () => {
    expect(element).to.have.tagName('div')
  })

  it('has a main section', () => {
    expect(element).to.have.descendants('main.content')
  })
})
