import React from 'react'
import DateFormatter from './DateFormatter'

const DateRange = (props) => {
  const { startDate, endDate, duration } = props

  return (
    <div className="date-range">
      {startDate ?
        <span>
          <DateFormatter className="start-date" date={startDate} format="MMM Do" />
          { endDate && <DateFormatter className="end-date" date={endDate} format="&nbsp;-&nbsp;MMM Do YYYY" /> }
        </span>
          : <DateFormatter className="duration" duration={duration} /> }
    </div>
  )
}

export default DateRange
