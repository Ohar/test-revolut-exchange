import currencyList from '@/consts/currencyList'
import PageMarker from '@/components/PageMarker'
import React from 'react'
import './style.less'

export default function PageIndicator ({type}) {
  return (
    <section className='PageIndicator'>
      {
        currencyList.map(
          currency => (
            <PageMarker
              key={currency}
              currency={currency}
              type={type}
            />
          )
        )
      }
    </section>
  )
}
