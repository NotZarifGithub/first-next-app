"use client"

import Countdown from "react-countdown"

const endingDate = new Date('2023-12-12')

const CountDown = () => {
  return (
    <Countdown 
      date={endingDate}
    />
  )
}

export default CountDown