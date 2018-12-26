import currencyList from '@/consts/currencyList'
import currencySelectorStates from '@/consts/currencySelectorStates'
import actionCurrencyFromSet from '@/store/actions/currency-from-set'
import actionCurrencyToSet from '@/store/actions/currency-to-set'
import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import './style.less'

class CurrencyChanger extends Component {
  constructor () {
    super()

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
    const {type}       = this.props
    const currency     = type === currencySelectorStates.from
                         ? this.props[currencySelectorStates.from]
                         : this.props[currencySelectorStates.to]
    const currentIndex = currencyList.indexOf(currency)
    const nextIndex    = currentIndex === currencyList.length - 1
                         ? 0
                         : currentIndex + 1

    this.changeCurrency(nextIndex)
  }

  toPrevCurrency () {
    const {type}       = this.props
    const currency     = type === currencySelectorStates.from
                         ? this.props[currencySelectorStates.from]
                         : this.props[currencySelectorStates.to]
    const currentIndex = currencyList.indexOf(currency)
    const prevIndex    = currentIndex === 0
                         ? currencyList.length - 1
                         : currentIndex - 1

    this.changeCurrency(prevIndex)
  }

  render () {
    return (
      <section className='CurrencyChanger'>
        <button
          onClick={this.toPrevCurrency}
          className='CurrencyChanger_btn CurrencyChanger_btn-prev'
        >
          ←
        </button>
        <button
          onClick={this.toNextCurrency}
          className='CurrencyChanger_btn CurrencyChanger_btn-next'
        >
          →
        </button>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyChanger)
