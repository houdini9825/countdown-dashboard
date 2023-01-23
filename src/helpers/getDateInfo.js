function getDateInfo(endDate) {
  const presentDate = new Date()

  let timeDifference = endDate-presentDate

  const days = Math.floor(timeDifference/86400000)
  timeDifference %= 86400000
  const hours = Math.floor (timeDifference/3600000)
  timeDifference %= 3600000
  const minutes = Math.floor(timeDifference/60000)
  timeDifference %= 60000
  const seconds = Math.floor(timeDifference/1000)

  return {days, hours, minutes, seconds}
}


export default getDateInfo