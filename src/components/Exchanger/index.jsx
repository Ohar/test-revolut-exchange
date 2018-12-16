import CurrencySelector from '@/components/CurrencySelector'
import currencySelectorStates from '@/consts/currencySelectorStates'
import React from 'react'
import './style.less'

export default function Exchanger () {
  return (
    <section className='Exchanger'>
      <CurrencySelector type={currencySelectorStates.from}/>
      <CurrencySelector type={currencySelectorStates.to}/>
    </section>
  )
}
