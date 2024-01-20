import React from "react"

const days = [
  { day: "Mon to Fri: ", time: "9.00 - 18.00" },
  { day: "Sat: ", time: "10.00 - 16.00" },
  { day: "Sun: ", time: "Closed" },
]

export default function WorkingHours() {
  return (
    <>
      <p
        style={{
          color: "#fff",
          fontSize: "1rem",
          fontWeight: "600",
          textTransform: "capitalize",
          marginBottom: "10px",
        }}
      >
        working hours
      </p>
      <span>
        {days.map((val, index) => {
          return (
            <p
              key={index}
              style={{ margin: "0", color: "#fff", fontSize: ".9rem" }}
            >
              {val.day}
              <span style={{ color: "#ddd", fontSize: ".8rem" }}>
                {val.time}
              </span>
            </p>
          )
        })}
      </span>
    </>
  )
}
