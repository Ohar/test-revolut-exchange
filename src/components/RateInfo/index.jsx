import Money from '@/components/Money'
import currencySelectorStates from '@/consts/currencySelectorStates'
import React from 'react'
import { connect } from 'react-redux'
import './style.less'

const CENTS_FROM = 100

function RateInfo (props) {
  const currencyFrom = props[currencySelectorStates.from]
  const currencyTo = props[currencySelectorStates.to]
  const rateFrom = props.rate[currencyFrom]
  const rateTo = props.rate[currencyTo]
  const rate = rateTo / rateFrom
  const centsTO = rate * CENTS_FROM

  return (
    <span className='RateInfo'>
      <Money
        cents={CENTS_FROM}
        currency={currencyFrom}
      />
      =
      <Money
        cents={centsTO}
        currency={currencyTo}
      />
    </span>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    [currencySelectorStates.from]: state.currencyState.from,
    [currencySelectorStates.to]  : state.currencyState.to,
    rate  : state.rateState,
  }
}

export default connect(mapStateToProps)(RateInfo)
