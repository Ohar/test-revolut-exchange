import currencyList from '@/consts/currencyList'

const parser = new DOMParser()

export default function getRatesFromECBXML (xmlStr) {
  const xml = parser.parseFromString(xmlStr, 'text/xml')
  const xmlNodeList = xml.querySelectorAll('Cube Cube')

  return [
    ...xmlNodeList
  ]
    .map(
      e => ({
        currency: e.getAttribute('currency'),
        rate: e.getAttribute('rate'),
      })
    )
    .filter(
      ({currency}) => currencyList.includes(currency)
    )
    .reduce(
      (rates, {currency, rate}) => ({
        ...rates,
        [currency]: Number(rate)
      }),
      {}
    )
}

