import * as React from "react"
//LINK - packages
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

export default function StockAvailability({ addItem }) {
  const { qtyCount, remainingQty } = addItem
  let [chipState, setChipState] = React.useState("")

  React.useEffect(() => {
    remainingQty >= qtyCount ? setChipState("In Stock") : setChipState("Out of Stock")
  }, [qtyCount, remainingQty])

  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip
          label={chipState}
          style={{
            color: "#fff",
            fontFamily: "DM Sans",
            fontWeight: "600",
            letterSpacing: ".5px",
            backgroundColor: chipState === "In Stock" ? "#32CD32" : "#DC143C",
          }}
        />
      </Stack>
    </>
  )
}
