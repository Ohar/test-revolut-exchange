import currencySelectorStates from '@/consts/currencySelectorStates'
import actionCurrencyFromSet from '@/store/currency/actions/currency-from-set'
import actionCurrencyToSet from '@/store/currency/actions/currency-to-set'
import actionMoneyFromSet from '@/store/currency/actions/money-from-set'
import actionMoneyToSet from '@/store/currency/actions/money-to-set'
import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './style.less'

const moneyRegexp = /^\d*\.?\d{0,2}$/

class MoneyInput extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)

    const {type} = this.props

    this.state = {
      isActive: type === currencySelectorStates.from,
    }
  }

  onChange ({target: {value: quantity}}) {
    if (moneyRegexp.test(quantity)) {
      this.props.moneyFromSet(quantity)
    }
  }

  render () {
    const {moneyFrom, moneyTo} = this.props
    const {isActive}           = this.state

    const moneyData = isActive
                      ? moneyFrom
                      : moneyTo

    return (
      <div className={classNames(
        'MoneyInput',
        {
          'MoneyInput-from': isActive,
          'MoneyInput-to': !isActive,
        }
      )}>
        {
          isActive
          ? (
            <input
              className='MoneyInput_field'
              value={moneyData}
              onChange={this.onChange}
            />
          )
          : (
            <span className='MoneyInput_field'>
              {moneyData}
            </span>
          )
        }
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      currencyFromSet: actionCurrencyFromSet,
      currencyToSet  : actionCurrencyToSet,
      moneyFromSet   : actionMoneyFromSet,
      moneyToSet     : actionMoneyToSet,
    },
    dispatch,
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    [currencySelectorStates.from]: state.currencyState.currencyFrom,
    [currencySelectorStates.to]  : state.currencyState.currencyTo,
    moneyFrom                    : state.currencyState.moneyFrom,
    moneyTo                      : state.currencyState.moneyTo,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyInput)
