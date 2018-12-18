import Money from '@/components/Money'
import countMoneyTo from '@/utils/countMoneyTo'
import React from 'react'
import { connect } from 'react-redux'
import './style.less'

const CENTS_FROM = 100

function RateInfo ({currencyFrom, currencyTo, rate, reverse = false}) {
  const rateFrom          = reverse ? rate[currencyTo] : rate[currencyFrom]
  const rateTo            = reverse ? rate[currencyFrom] : rate[currencyTo]
  const currencyFromFixed = reverse ? currencyTo : currencyFrom
  const currencyToFixed   = reverse ? currencyFrom : currencyTo
  const centsTo           = countMoneyTo(CENTS_FROM, rateFrom, rateTo)

  return (
    <div className='RateInfo'>
      <Money
        cents={CENTS_FROM}
        currency={currencyFromFixed}
      /> = <Money
        cents={centsTo}
        currency={currencyToFixed}
      />
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    currencyFrom: state.currencyState.currencyFrom,
    currencyTo  : state.currencyState.currencyTo,
    rate        : state.currencyState.rate,
  }
}

export default connect(mapStateToProps)(RateInfo)
