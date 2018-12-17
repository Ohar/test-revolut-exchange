import currencySelectorStates from '@/consts/currencySelectorStates'
import React from 'react'
import classNames from 'classnames'
import connect from 'react-redux/es/connect/connect'
import './style.less'

function PageMarker (props) {
  const {currency, type} = props
  const activeCurrency   = props[type] // “from” or “to”
  const isActive         = currency === activeCurrency

  return (
    <span className={classNames(
      'PageMarker',
      {
        'PageMarker-active': isActive,
      }
    )}>
      ●
    </span>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    [currencySelectorStates.from]: state.currencyState.currencyFrom,
    [currencySelectorStates.to]  : state.currencyState.currencyTo,
  }
}

export default connect(mapStateToProps)(PageMarker)
