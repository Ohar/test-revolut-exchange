import AccountInfo from '@/components/AccountInfo'
import MoneyInput from '@/components/MoneyInput'
import RateInfo from '@/components/RateInfo'
import currencySelectorStates from '@/consts/currencySelectorStates'
import React from 'react'
import './style.less'

export default function CurrencyScreen ({currency, type}) {
  return (
    <li className='CurrencyScreen'>
      <span className='CurrencyScreen_row'>
        <span className='CurrencyScreen_currency'>
          {currency}
        </span>

        <MoneyInput type={type}/>
      </span>

      <span className='CurrencyScreen_row'>
        <AccountInfo currency={currency}/>

        {
          type === currencySelectorStates.to
          ? <RateInfo/>
          : null
        }
        </span>
    </li>
  )
}
