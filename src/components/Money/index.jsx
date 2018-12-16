import currencySymbolList from '@/consts/currencySymbolList'
import React from 'react'
import './style.less'

const CENTS_KOEF = 100

export default function Money ({cents, currency}) {
  const money  = Math.round(cents) / CENTS_KOEF
  const symbol = currencySymbolList[currency]

  return (
    <span className='Money'>
      <span className='Money_symbol'>
        {symbol}
      </span>
      &nbsp;
      <span className='Money_quantity'>
        {money}
      </span>
    </span>
  )
}
