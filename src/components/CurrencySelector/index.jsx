import currencyList from '@/consts/currencyList'
import CurrencyScreen from '@/components/CurrencyScreen'
import React from 'react'
import './style.less'

export default function CurrencySelector ({type}) {
  return (
    <ul className='CurrencySelector'>
      {
        currencyList.map(
          currency => (
            <CurrencyScreen
              key={currency}
              currency={currency}
              type={type}
            />
          ),
        )
      }
    </ul>
  )
}
