import RateInfo from '@/components/RateInfo'
import actionCurrencySwitch from '@/store/currency/actions/currency-switch'
import React from 'react'
import connect from 'react-redux/es/connect/connect'
import Select from 'react-select'
import { bindActionCreators } from 'redux'
import './style.less'

function Controls ({currencySwitch}) {
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

  return (
    <section className='Controls'>
      <button>Cancel</button>

      <Select
        className='Controls_select'
        options={options}
        value={options[0]}
        onChange={currencySwitch}
      />

      <button>Exchange</button>
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

export default connect(null, mapDispatchToProps)(Controls)

