import React from "react"
//LINK - packages
import { Grid } from "@mui/material"
//LINK - project components
import ContentGridLayout from "./singleItemLayout/ContentGridLayout"
import BtnGridLayout from "./singleItemLayout/BtnGridLayout"

export default function SingleItemLayout({ cartList }) {
  const { productItem, orderDetails } = cartList

  return (
    <Grid container rowGap={1}>
      <Grid item xs={12} md={10}>
        <ContentGridLayout
          productItem={productItem}
          orderDetails={orderDetails}
        />
      </Grid>
      <Grid item xs={12} md={2} alignContent={"flex-end"}>
        <BtnGridLayout />
      </Grid>
    </Grid>
  )
}

/* <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: minWidth768 ? "18% 40% 18% 18%" : '48% 48%',
        // gridTemplateColumns: "18% 40% 18% 18%",
        gridAutoRows: "200px",
        columnGap: "2%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image image={image} />
      </div>
      <div style={{ height: "100%", padding: "5px 0", overflow: "hidden" }}>
        <ItemDesc
          name={name}
          type={type}
          desc={description}
          price={price}
          sku={SKU}
        />
      </div>
      <div style={{ height: "100%", padding: "5px 0", overflow: "hidden" }}>
        <OrderInfo orderSize={size} orderQty={qty} total={price * qty} />
      </div>
      <div
        style={{
          height: "100%",
          padding: "5px 0",
          overflow: "hidden",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Remove />
      </div>
    </div> */
