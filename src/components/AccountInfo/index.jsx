import Money from '@/components/Money'
import React from 'react'
import { connect } from 'react-redux'
import './style.less'

function AccountInfo ({account, currency}) {
  const quantity = account[currency]

  return (
    <div className='AccountInfo'>
      You have
      &nbsp;
      <Money
        quantity={quantity}
        currency={currency}
      />
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    account: state.currencyState.account,
  }
}

export default connect(mapStateToProps)(AccountInfo)
