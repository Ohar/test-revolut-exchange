import CurrencyScreen from '@/components/CurrencyScreen'
import PageIndicator from '@/components/PageIndicator'
import currencyList from '@/consts/currencyList'
import currencySelectorStates from '@/consts/currencySelectorStates'
import React from 'react'
import connect from 'react-redux/es/connect/connect'
import './style.less'

function CurrencySelector (props) {
  const {type}         = props
  const activeCurrency = props[type] // “from” or “to”
  const activeIndex    = currencyList.indexOf(activeCurrency)
  const percent        = 100 * (1 - (activeIndex + .5 + .5 * currencyList.length) / currencyList.length)

  return (
    <section className='CurrencySelector'>
      <ul
        className='CurrencySelector_list'
        style={{transform: `translateX(${percent}%)`}}
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
      <PageIndicator
        className='CurrencySelector_indicator'
        type={type}
      />
    </section>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    [currencySelectorStates.from]: state.currencyState.currencyFrom,
    [currencySelectorStates.to]  : state.currencyState.currencyTo,
  }
}

export default connect(mapStateToProps)(CurrencySelector)
