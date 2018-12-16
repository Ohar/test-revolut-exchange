import AccountInfo from '@/components/AccountInfo'
import RateInfo from '@/components/RateInfo'
import currencyList from '@/consts/currencyList'
import currencySelectorStates from '@/consts/currencySelectorStates'
import actionCurrencyFromSet from '@/store/currency/actions/currency-from-set'
import actionCurrencyToSet from '@/store/currency/actions/currency-to-set'
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

        <AccountInfo currency={currency}/>

        {
          type === currencySelectorStates.to
          ? <RateInfo/>
          : null
        }

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
    [currencySelectorStates.from]: state.currencyState.from,
    [currencySelectorStates.to]  : state.currencyState.to,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyScreen)
