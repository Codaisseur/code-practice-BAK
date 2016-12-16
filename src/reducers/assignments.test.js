import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import assignments from './assignments'
import { ADD_ASSIGNMENT } from '../actions/assignments'

chai.use(chaiEnzyme())

describe('assignments reducer', () => {
  const initialState = [
    {
      assignmentId: 1,
      title: 'Your First Web Page',
      text: 'Have a look at this exercise!'
    },
    {
      assignmentId: 2,
      title: 'Installing something',
      text: 'Have a look at this other exercise!'
    },
    {
      assignmentId: 3,
      title: 'Installing some more',
      text: 'Have a look at this exercise!'
    },
    {
      assignmentId: 4,
      title: 'Go!',
      text: 'Have a look at this exercise!'
    }
  ]

  it('should return the initial state', () => {
    expect(
      assignments( initialState /* state */, {} /* action */)
    ).to.eql([
      {
        courseId: 1,
        assignmentId: 1,
        title: 'Your First Web Page',
        text: 'Have a look at this exercise!'
      },
      {
        courseId: 1,
        assignmentId: 2,
        title: 'Installing something',
        text: 'Have a look at this other exercise!'
      },
      {
        courseId: 1,
        assignmentId: 3,
        title: 'Installing some more',
        text: 'Have a look at this exercise!'
      },
      {
        courseId: 1,
        assignmentId: 4,
        title: 'Go!',
        text: 'Have a look at this exercise!'
      }
    ])
  })

  it('should handle ADD_ASSIGNMENT', () => {
    expect(
      assignments(initialState, {
        type: ADD_ASSIGNMENT,
        payload: [{
          assignmentId: 5,
          title: 'DifficultStuff!',
          text: 'React' }]
      })
    ).to.eql([{
      assignmentId: 5,
      title: 'DifficultStuff!',
      text: 'React' }])
  })
})
