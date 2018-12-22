import actionRateSet from '@/store/actions/rate-set'
import API_URL from '@/consts/API_URL'
import getRatesFromECBXML from '@/utils/getRatesFromECBXML'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

const UPDATE_INTERVAL = 10000 // “Your app should poll the endpoint every 10 seconds”

const FAKE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<gesmes:Envelope xmlns:gesmes="http://www.gesmes.org/xml/2002-08-01" xmlns="http://www.ecb.int/vocabulary/2002-08-01/eurofxref">
	<gesmes:subject>Reference rates</gesmes:subject>
	<gesmes:Sender>
		<gesmes:name>European Central Bank</gesmes:name>
	</gesmes:Sender>
	<Cube>
		<Cube time='2018-12-21'>
			<Cube currency='USD' rate='1.1414'/>
			<Cube currency='JPY' rate='126.98'/>
			<Cube currency='BGN' rate='1.9558'/>
			<Cube currency='CZK' rate='25.855'/>
			<Cube currency='DKK' rate='7.4670'/>
			<Cube currency='GBP' rate='0.90215'/>
			<Cube currency='HUF' rate='321.97'/>
			<Cube currency='PLN' rate='4.2851'/>
			<Cube currency='RON' rate='4.6389'/>
			<Cube currency='SEK' rate='10.2733'/>
			<Cube currency='CHF' rate='1.1312'/>
			<Cube currency='ISK' rate='134.10'/>
			<Cube currency='NOK' rate='9.9428'/>
			<Cube currency='HRK' rate='7.4216'/>
			<Cube currency='RUB' rate='78.2103'/>
			<Cube currency='TRY' rate='6.0546'/>
			<Cube currency='AUD' rate='1.6081'/>
			<Cube currency='BRL' rate='4.4099'/>
			<Cube currency='CAD' rate='1.5459'/>
			<Cube currency='CNY' rate='7.8825'/>
			<Cube currency='HKD' rate='8.9368'/>
			<Cube currency='IDR' rate='16696.34'/>
			<Cube currency='ILS' rate='4.3045'/>
			<Cube currency='INR' rate='80.0400'/>
			<Cube currency='KRW' rate='1282.71'/>
			<Cube currency='MXN' rate='22.7547'/>
			<Cube currency='MYR' rate='4.7608'/>
			<Cube currency='NZD' rate='1.6925'/>
			<Cube currency='PHP' rate='60.546'/>
			<Cube currency='SGD' rate='1.5641'/>
			<Cube currency='THB' rate='37.267'/>
			<Cube currency='ZAR' rate='16.4753'/>
		</Cube>
	</Cube>
</gesmes:Envelope>
`

class RateUpdater extends Component {
  constructor (...args) {
    super(...args)

    this.updater = null
    this.request = null
  }

  componentDidMount () {
    const {rateSet} = this.props

    this.updater = setInterval(
      () => {
        // TODO: fix CORS problem here
        // I prefer to not care about “AbortController” here, bcz it's just a test task
        // this.request = fetch(API_URL)
        //   .catch(e => {
        //     console.error('Err1', e)
        //   })
        //   .then(res => {
        //     console.info('res', res) // eslint-disable-line no-console
        //     return res ? res.text() : FAKE_XML
        //   })
        //   .then(xml => {
        //     console.info('xml', xml)
        //     console.info('rates', getRatesFromECBXML(xml))
        //   })
        //   .catch(e => {
        //     console.error('Err3', e)
        //   })
        rateSet(getRatesFromECBXML(FAKE_XML))
      },
      UPDATE_INTERVAL
    )
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

