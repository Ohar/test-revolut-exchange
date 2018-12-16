import Money from '@/components/Money'
import React from 'react'
import { connect } from 'react-redux'
import './style.less'

function AccountInfo ({account, currency}) {
  const cents = account[currency]

  return (
    <span className='AccountInfo'>
      You have
      <Money
        cents={cents}
        currency={currency}
      />
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
