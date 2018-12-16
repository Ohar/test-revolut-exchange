import React, { Component } from 'react'
import './style.less'

class Controls extends Component {
  constructor (...args) {
    super(...args)
  }

  render () {
    return (
      <section className='Controls'>
        <button>Cancel</button>
        <select>
          <option>£1 = €1.3444</option>
        </select>
        <button>Exchange</button>
      </section>
    )
  }
}

export default Controls
