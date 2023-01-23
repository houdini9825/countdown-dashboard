const validMonths = ['january', 'jan', 'feb', 'february', 'mar', 'march', 'apr', 'april', 'may', 'june', 'july', 'aug', 'august', 'sept', 'september', 'oct', 'october', 'nov', 'november', 'dec', 'december']


function validateDate(date) {
  const [month, day, year] = date.split(' ')
  
  const monthValid = validMonths.includes(month)
  const dayValid = Number(day) > 0 && Number(day) < 32
  const yearValid = Number(year) >= 2023

  return monthValid && dayValid && yearValid
}

export default validateDate