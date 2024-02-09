import * as React from "react"
//LINK - packages
import { SnackbarProvider, useSnackbar } from "notistack"

function MyApp({ change, snackbar, addItem }) {
  const { enqueueSnackbar } = useSnackbar()
  const { qtyCount, productName } = addItem

  const handleClickVariant = (variant, contentState) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(contentState, { variant })
  }

  React.useEffect(() => {
    if (change > 0) {
      snackbar
        ? handleClickVariant(
            "success",
            `${qtyCount} quantity(s) added from ${productName}.`
          )
        : handleClickVariant("error", `No quantities added from ${productName}`)
    }
  }, [change])

  return <React.Fragment></React.Fragment>
}

export default function SnackBarComponent({ change, snackbar, addItem }) {
  return (
    <SnackbarProvider maxSnack={3} style={{ fontFamily: "DM Sans" }}>
      <MyApp change={change} snackbar={snackbar} addItem={addItem} />
    </SnackbarProvider>
  )
}
