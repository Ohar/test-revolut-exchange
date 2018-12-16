import Money from '@/components/Money'
import React from 'react'
import { connect } from 'react-redux'
import './style.less'

function AccountInfo ({account, currency}) {
  const cents = account[currency]

  return (
    <div className='AccountInfo'>
      You have
      &nbsp;
      <Money
        cents={cents}
        currency={currency}
      />
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    account: state.accountState,
  }
}

export default connect(mapStateToProps)(AccountInfo)
