import CurrencyScreen from '@/components/CurrencyScreen'
import currencyList from '@/consts/currencyList'
import currencySelectorStates from '@/consts/currencySelectorStates'
import React from 'react'
import connect from 'react-redux/es/connect/connect'
import './style.less'

function CurrencySelector (props) {
  const {type}         = props
  const activeCurrency = props[type] // “from” or “to”
  const activeIndex    = currencyList.indexOf(activeCurrency)
  const percent        = 100 * (activeIndex / currencyList.length)

  return (
    <ul
      className='CurrencySelector'
      style={{transform: `translateX(-${percent}%)`}}
    >
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

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    [currencySelectorStates.from]: state.currencyState.from,
    [currencySelectorStates.to]  : state.currencyState.to,
  }
}

export default connect(mapStateToProps)(CurrencySelector)
