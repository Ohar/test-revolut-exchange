import actionRateSet from '@/store/actions/rate-set'
import API_URL from '@/consts/API_URL'
import getRatesFromECBXML from '@/utils/getRatesFromECBXML'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

const UPDATE_INTERVAL = 10000 // “Your app should poll the endpoint every 10 seconds”

class RateUpdater extends Component {
  constructor (...args) {
    super(...args)

    this.updater = null
    this.request = null

    this.updateRates = this.updateRates.bind(this)
  }

  updateRates () {
    const {rateSet} = this.props

    // I prefer to not care about “AbortController” here, bcz it's just a test task
    this.request = fetch(API_URL)
      .then(res => res.text())
      .then(xml => {
        rateSet(getRatesFromECBXML(xml))
      })
  }

  componentDidMount () {
    this.updateRates()
    this.updater = setInterval(this.updateRates, UPDATE_INTERVAL)
  }

  componentWillUnmount () {
    if (this.updater) {
      clearInterval(this.updater)
    }

    this.updater = null
    this.request = null
  }

  render () {
    const {children} = this.props

    return (
      <section className='RateUpdater'>
        {children}
      </section>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      rateSet: actionRateSet,
    },
    dispatch,
  )
}

export default connect(null, mapDispatchToProps)(RateUpdater)

