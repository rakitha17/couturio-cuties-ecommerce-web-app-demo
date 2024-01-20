import React from "react"

export default function SingleSize({ size, isAvailable }) {
  return (
    <div
      style={{
        color: isAvailable ? "#DDD0C8" : "#000",
        backgroundColor: isAvailable ? '#323232' : '#DDD0C8',
        fontSize: '.9rem',
        fontWeight: "600",
        textTransform: 'uppercase',
        border: "2px solid #323232",
        borderRadius: '5px'
      }}
    >
      {size}
    </div>
  )
}
