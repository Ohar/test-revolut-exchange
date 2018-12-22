import CENTS_KOEF from '@/consts/CENTS_KOEF'
import currencySymbolList from '@/consts/currencySymbolList'
import React from 'react'
import './style.less'

export default function Money ({quantity, currency}) {
  const quantityFixed = Math.round(quantity * CENTS_KOEF) / CENTS_KOEF
  const symbol     = currencySymbolList[currency]

  return (
    <span className='Money'>
      <span className='Money_symbol'>
        {symbol}
      </span>
      &nbsp;
      <span className='Money_quantity'>
        {quantityFixed}
      </span>
    </span>
  )
}
