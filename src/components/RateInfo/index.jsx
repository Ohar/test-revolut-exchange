import Money from '@/components/Money'
import countMoneyTo from '@/utils/countMoneyTo'
import React from 'react'
import { connect } from 'react-redux'
import './style.less'

const MONEY_FROM = 1

function RateInfo ({currencyFrom, currencyTo, rate, reverse = false}) {
  const rateFrom          = reverse ? rate[currencyTo] : rate[currencyFrom]
  const rateTo            = reverse ? rate[currencyFrom] : rate[currencyTo]
  const currencyFromFixed = reverse ? currencyTo : currencyFrom
  const currencyToFixed   = reverse ? currencyFrom : currencyTo
  const moneyTo           = countMoneyTo(MONEY_FROM, rateFrom, rateTo)

  return (
    <div className='RateInfo'>
      <Money
        quantity={MONEY_FROM}
        currency={currencyFromFixed}
      /> = <Money
        quantity={moneyTo}
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
