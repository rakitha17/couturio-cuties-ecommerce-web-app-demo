import React from 'react'

export default function TypeName({name, type}) {
  return (
    <div>
      <p style={{margin: 0, fontSize: '.9rem', textTransform: 'capitalize'}}>{name} | <b>{type}</b></p>
    </div>
  )
}
