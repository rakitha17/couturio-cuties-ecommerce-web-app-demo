import React from "react"
//LINK - project components
import SingleText from "../../../../components/home/discoverImageLayout/SingleText"
import Btn from "../../../../components/home/discoverImageLayout/Btn"

export default function FindMore({ topTxt, midTxt, bottomTxt }) {
  let texts = [topTxt, midTxt, bottomTxt]

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "calc(1.5rem * .5)" }}>
        {texts.map((txt, index) => {
          return <SingleText key={index} txt={txt} index={index} />
        })}
      </div>
      <Btn />
    </div>
  )
}
