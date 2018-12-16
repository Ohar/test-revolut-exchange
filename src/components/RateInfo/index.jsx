import Money from '@/components/Money'
import React from 'react'
import { connect } from 'react-redux'
import './style.less'

const CENTS_FROM = 100

function RateInfo ({currencyFrom, currencyTo, rate, reverse = false}) {
  const rateFrom          = reverse ? rate[currencyTo] : rate[currencyFrom]
  const rateTo            = reverse ? rate[currencyFrom] : rate[currencyTo]
  const currencyFromFixed = reverse ? currencyTo : currencyFrom
  const currencyToFixed   = reverse ? currencyFrom : currencyTo
  const rateKoef          = rateTo / rateFrom
  const centsTO           = rateKoef * CENTS_FROM

  return (
    <div className='RateInfo'>
      <Money
        cents={CENTS_FROM}
        currency={currencyFromFixed}
      /> = <Money
        cents={centsTO}
        currency={currencyToFixed}
      />
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    currencyFrom: state.currencyState.from,
    currencyTo  : state.currencyState.to,
    rate        : state.rateState,
  }
}

export default connect(mapStateToProps)(RateInfo)
