import AccountInfo from '@/components/AccountInfo'
import MoneyInput from '@/components/MoneyInput'
import RateInfo from '@/components/RateInfo'
import currencyList from '@/consts/currencyList'
import currencySelectorStates from '@/consts/currencySelectorStates'
import actionCurrencyFromSet from '@/store/actions/currency-from-set'
import actionCurrencyToSet from '@/store/actions/currency-to-set'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './style.less'

class CurrencyScreen extends Component {
  constructor () {
    super()

    this.changeCurrency = this.changeCurrency.bind(this)
    this.toNextCurrency = this.toNextCurrency.bind(this)
    this.toPrevCurrency = this.toPrevCurrency.bind(this)
  }

  changeCurrency (currencyIndex) {
    const {type, currencyFromSet, currencyToSet} = this.props
    const changer                                = type === currencySelectorStates.from
                                                   ? currencyFromSet
                                                   : currencyToSet

    changer(currencyList[currencyIndex])
  }

  toNextCurrency () {
    const {currency}   = this.props
    const currentIndex = currencyList.indexOf(currency)
    const nextIndex    = currentIndex === currencyList.length - 1
                         ? 0
                         : currentIndex + 1

    this.changeCurrency(nextIndex)
  }

  toPrevCurrency () {
    const {currency}   = this.props
    const currentIndex = currencyList.indexOf(currency)
    const prevIndex    = currentIndex === 0
                         ? currencyList.length - 1
                         : currentIndex - 1

    this.changeCurrency(prevIndex)
  }

  render () {
    const {currency, type} = this.props
    const current          = this.props[type] // “from” or “to”
    const isActive         = currency === current

    return (
      <li className='CurrencyScreen'>
        <span className='CurrencyScreen_row'>
          <span className='CurrencyScreen_currency'>
            {
              isActive
              ? <button onClick={this.toPrevCurrency}>←</button>
              : null
            }
            {currency}
            {
              isActive
              ? <button onClick={this.toNextCurrency}>→</button>
              : null
            }
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
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      currencyFromSet: actionCurrencyFromSet,
      currencyToSet  : actionCurrencyToSet,
    },
    dispatch,
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    [currencySelectorStates.from]: state.currencyState.currencyFrom,
    [currencySelectorStates.to]  : state.currencyState.currencyTo,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyScreen)
