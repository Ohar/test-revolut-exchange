import currencySymbolList from '@/consts/currencySymbolList'
import React from 'react'
import { connect } from 'react-redux'
import './style.less'

const CENTS_KOEF = 100

function AccountInfo ({account, currency}) {
  const money  = account[currency] / CENTS_KOEF
  const symbol = currencySymbolList[currency]

  return (
    <span className='AccountInfo'>
      You have {symbol} {money}
    </span>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    account: state.accountState,
  }
}

export default connect(mapStateToProps)(AccountInfo)
