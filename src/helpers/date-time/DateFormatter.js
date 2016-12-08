import React from 'react'
import moment from 'moment-timezone'

const DateFormatter = (props) => {
  const { date, duration, format } = props

  return(
    <span
      className="date"
      data-timestamp={duration ? moment.duration(duration).humanize() : moment(date).tz('UTC').format()}>
      { duration ?
        moment.duration(duration).humanize() :
      moment(date).format( format || 'MMM Do') }
    </span>
  )
}

export default DateFormatter
