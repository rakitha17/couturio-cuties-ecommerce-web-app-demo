import React from "react"
//LINK - packages
import { Nav } from "react-bootstrap"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { useMediaQuery } from "@mui/material"
import { NavLink } from "react-router-dom"
import Badge from "@mui/material/Badge"
import { useSelector } from "react-redux"

export default function HeaderLink({ text, link, name }) {
  let minWidth1500 = useMediaQuery("(min-width: 1500px)")

  let cartStore = useSelector((store) => store.cartStore)

  return (
    <Nav.Item>
      <div name={name}>
        {text === "cart" ? (
          <div
            style={{
              display: "inline",
            }}
          >
            <ShoppingCartOutlinedIcon
              style={{
                marginRight: "5px",
                fontSize: "1.8rem",
                color: "#000",
              }}
            />
            <NavLink
              to={link}
              style={({ isActive }) => {
                return {
                  color: "#000",
                  fontSize: minWidth1500 ? "1.2rem" : "1rem",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  textDecoration: "none",
                  paddingBottom: "2px",
                  borderBottom: isActive ? "2px solid #000" : "none",
                }
              }}
            >
              <Badge badgeContent={cartStore.cartProduct.length} color="error">
                {text}
              </Badge>
            </NavLink>
          </div>
        ) : (
          <NavLink
            to={link}
            style={({ isActive }) => {
              return {
                color: "#000",
                fontSize: minWidth1500 ? "1.2rem" : "1rem",
                fontWeight: "600",
                textTransform: "capitalize",
                textDecoration: "none",
                paddingBottom: "2px",
                borderBottom: isActive ? "2px solid #000" : "none",
              }
            }}
          >
            {text}
          </NavLink>
        )}
      </div>
    </Nav.Item>
  )
}
