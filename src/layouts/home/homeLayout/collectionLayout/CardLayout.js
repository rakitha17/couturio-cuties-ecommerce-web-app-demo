import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

export default function CardLayout({ collection }) {
  let minWidth1500 = useMediaQuery("(min-width: 1500px)")
  let defaultTxt = `Shop the latest ${collection.title} collection at Couturio Cuties`
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={collection.image}
          alt={collection.label.split("-").join(" ")}
        />
        <CardContent style={{ backgroundColor: "#323232" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              color: "#DDD0C8",
              fontFamily: "DM Sans",
              fontSize: minWidth1500 ? "1.5rem" : "1.2rem",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            {collection.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              color: "#DDD0C8",
              fontFamily: "DM Sans",
              fontSize: minWidth1500 ? "1rem" : ".9rem",
            }}
          >
            {collection.cardDoc}. {defaultTxt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
