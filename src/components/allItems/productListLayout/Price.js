import React from 'react'
import { priceValueFormat } from '../../../utilities/priceValueFormat'

export default function Price({value}) {
  return (
    <div>
      <p style={{margin: 0, fontSize: '1rem', fontWeight: '600'}}>{priceValueFormat(value)}</p>
    </div>
  )
}
