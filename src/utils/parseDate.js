const parseDate = invalidDate => {
  const dateArray = invalidDate.split(' ')
  const dateDay = dateArray[1]
  const dateMonth = dateArray[2]
  const dateYear = dateArray[3]
  const dateTime = dateArray[5].replace('h', ':')

  return `${dateMonth} ${dateDay}, ${dateYear} ${dateTime}`
}

export default parseDate
