import Exchanger from '@/components/Exchanger/index'
import Controls from '@/components/Controls/index'
import Keyboard from '@/components/Keyboard/index'
import React from 'react'
import './style.less'

export default function App () {
  return (
    <main className='App'>
      <Controls/>
      <Exchanger/>
      <Keyboard/>
    </main>
  )
}
