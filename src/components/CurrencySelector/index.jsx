import currencyList from '@/consts/currencyList'
import currencySelectorStates from '@/consts/currencySelectorStates'
import actionCurrencyFromSet from '@/store/currency/actions/currency-from-set'
import actionCurrencyToSet from '@/store/currency/actions/currency-to-set'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.less'
import { bindActionCreators } from 'redux'

class CurrencySelector extends Component {
  render () {
    const {currencyFromSet, currencyToSet, type}  = this.props
    const current = this.props[type] // “from” or “to”
    const changer = type === currencySelectorStates.from
                    ? currencyFromSet
                    : currencyToSet

    // TODO: separate <LI> as component
    return (
      <ul className='CurrencySelector'>
        {
          currencyList.map(
            currency => (
              <li
                className='CurrencySelector_item'
                key={currency}
                onClick={() => changer(currency)}
              >
                {currency}
                {currency === current ? '+' : '-'}
              </li>
            ),
          )
        }
      </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector)
