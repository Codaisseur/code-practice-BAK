import React from 'react'
import wrapper from '~/../test/component-wrapper'
import chai, { expect } from 'chai'
import spies from 'chai-spies'
import chaiEnzyme from 'chai-enzyme'
import { App } from './App'

chai.use(chaiEnzyme())
chai.use(spies)

const appProps = {
  appError: chai.spy(),
  clearErrors: chai.spy(),
  loading: false,
  errors: {},
}

const element = wrapper(<App { ...appProps } />)

describe('<App />', () => {
  it('has a wrapping div tag', () => {
    expect(element).to.have.tagName('div')
  })

  it('has a main section', () => {
    expect(element).to.have.descendants('main.content')
  })
})
