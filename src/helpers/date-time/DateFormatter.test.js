import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import DateFormatter from './DateFormatter'
chai.use(chaiEnzyme())

const date = new Date(Date.UTC('2016', '01', '31', '09', '30', '00', ''))
const wrapper = shallow(<DateFormatter date={ date } />)

describe('<DateFormatter/>', () => {
  it('contains a span tag with class date', () => {
    expect(wrapper).to.have.tagName('span')
    expect(wrapper).to.have.className('date')
    expect(wrapper).data('timestamp').to.equal('2016-03-02T09:30:00Z')
  })

  it('contains data-timestamp attribute with the full date and time', () => {
    expect(wrapper).data('timestamp').to.equal('2016-03-02T09:30:00Z')
  })

  describe('formatting', () => {
    it('renders with the default format MMM Do (e.g. Mar 2nd)', () => {
      expect(wrapper.text()).to.equal('Mar 2nd')
    })

    describe('with format props', () => {
      const wrapper = shallow(<DateFormatter date={ date } format='MMMM Do YY' />)

      it('takes a format prop and renders accordingly', () => {
        expect(wrapper.text()).to.equal('March 2nd 16')
      })
    })
  })

  describe('duration', () => {
    const wrapper = shallow(<DateFormatter duration={{ seconds: 86400 }} />)
    it('renders the duration instead', () => {
      expect(wrapper.text()).to.equal('a day')
    })
  })
})
