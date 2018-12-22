import Controls from '@/components/Controls'
import Exchanger from '@/components/Exchanger'
import RateUpdater from '@/components/RateUpdater'
import StatusBar from '@/components/StatusBar'
import React from 'react'
import './style.less'

export default function App () {
  return (
    <main className='App'>
      <RateUpdater>
        <StatusBar/>
        <Controls/>
        <Exchanger/>
      </RateUpdater>
    </main>
  )
}
