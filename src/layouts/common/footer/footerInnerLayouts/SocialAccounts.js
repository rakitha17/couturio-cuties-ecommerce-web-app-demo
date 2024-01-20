import React from "react"

import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import PinterestIcon from "@mui/icons-material/Pinterest"

const icons = [
  {
    icon: <FacebookIcon style={{ color: "#DDD0C8", fontSize: "2rem" }} />,
    label: "Share on Facebook",
  },
  {
    icon: <TwitterIcon style={{ color: "#DDD0C8", fontSize: "2rem" }} />,
    label: "Share on Twitter",
  },
  {
    icon: <InstagramIcon style={{ color: "#DDD0C8", fontSize: "2rem" }} />,
    label: "Share on Instagram",
  },
  {
    icon: <PinterestIcon style={{ color: "#DDD0C8", fontSize: "2rem" }} />,
    label: "Share on Pinterest",
  },
]

export default function SocialAccounts() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div>
        {icons.map((val, index) => {
          return (
            <span
              key={index}
              style={{ margin: "0 5px" }}
              aria-label={val.label}
            >
              {val.icon}
            </span>
          )
        })}
      </div>
      <p style={{ color: "#fff", fontSize: ".9rem", margin: "0" }}>
        Powered by Rakitha Abeykoon
      </p>
      <p style={{ color: "#ddd", fontSize: ".8rem", margin: "0" }}>
        Copyright © {new Date().getFullYear()}, Rakitha Abeykoon
      </p>
    </div>
  )
}
