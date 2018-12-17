import RateInfo from '@/components/RateInfo'
import actionCurrencySwitch from '@/store/currency/actions/currency-switch'
import React from 'react'
import connect from 'react-redux/es/connect/connect'
import Select from 'react-select'
import { bindActionCreators } from 'redux'
import './style.less'

function Controls ({currencyFrom, currencyTo, currencySwitch}) {
  const options = [
    {
      value: 'foo',
      label: <RateInfo/>,
    },
    {
      value: 'bar',
      label: <RateInfo reverse/>,
    },
  ]
  const isCurrenciesDiffers = currencyFrom !== currencyTo
  const isExchangeDisabled = !isCurrenciesDiffers

  return (
    <section className='Controls'>
      <button>Cancel</button>

      <Select
        className='Controls_select'
        options={options}
        value={options[0]}
        onChange={currencySwitch}
      />

      <button disabled={isExchangeDisabled}>
        Exchange
      </button>
    </section>
  )
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      currencySwitch: actionCurrencySwitch,
    },
    dispatch,
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    currencyFrom: state.currencyState.from,
    currencyTo  : state.currencyState.to,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)

