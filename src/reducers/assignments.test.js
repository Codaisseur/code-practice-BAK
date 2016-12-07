import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import assignments from './assignments'
import { ADD_ASSIGNMENT } from '../actions/assignments'

chai.use(chaiEnzyme())

describe('assignments reducer', () => {
  it('should return the initial state', () => {
    expect(
      assignments(undefined, {})
    ).to.eql([
      {
        id: 1,
        title: 'Ruby on Rails',
        text: 'Have a look at this exercise!'
      }
    ])
  })

  it('should handle ADD_ASSIGNMENT', () => {
    expect(
      assignments([], {
        type: ADD_ASSIGNMENT,
        text: 'React'
      })
    ).to.eql([{ text: 'React' }])

    expect(
      assignments([{ text: 'Ruby on Rails' }], {
          type: ADD_ASSIGNMENT,
          text: 'React'
        })
      ).to.eql([{ text: 'Ruby on Rails' }, { text: 'React' }]
    )
  })
})
