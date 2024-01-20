import React from "react"
//LINK - project components
import SingleItemLayout from "./itemBoxLayout/SingleItemLayout"

export default function ItemBoxLayout({ cartList }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: '10px',
        boxShadow: "rgba(0, 0, 0, .2) 0px 0px 5px",
        borderRadius: "10px",
        marginBottom: "calc(1.5rem * .5)",
      }}
    >
      <SingleItemLayout cartList={cartList} />
    </div>
  )
}
