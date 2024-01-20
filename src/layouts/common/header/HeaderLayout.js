import React from "react"
//LINK - packages
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
//LINK - project components
import HeaderLink from "../../../components/common/headerLayout/HeaderLink"
//LINK - sources
import logo from "../../../assets/images/logo/logo-no-background.png"

const itemList = [
  [
    { text: "all items", link: "/all-items", name: "All Items" },
    { text: "dresses", link: "/dresses", name: "Dresses" },
    { text: "seasonal", link: "/seasonal", name: "Seasonal" },
    { text: "denims", link: "/denims", name: "Denims" },
    { text: "tshirts", link: "/t-shirts", name: "T-Shirts" },
    { text: "top", link: "/tops", name: "Top" },
  ],
  [{ text: "cart", link: "/cart", name: "Shoping Cart" }],
]

export default function HeaderLayout() {
  return (
    <div role="navigation">
      <Navbar expand="lg" style={{ backgroundColor: "#DDD0C8" }}>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                alt="Home of Couturio Cuties"
                style={{ height: "40px" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {itemList.map((item, index) => {
              return (
                <Nav
                  key={index}
                  className={
                    index === 0 ? "me-auto my-2 my-lg-0" : "my-2 my-lg-0"
                  }
                  // style={{ maxHeight: "100px" }}
                  // navbarScroll
                >
                  {item.map((val, index) => {
                    return (
                      <div key={index} style={{ padding: ".5rem 1rem" }}>
                        <HeaderLink
                          text={val.text}
                          link={val.link}
                          name={val.name}
                        />
                      </div>
                    )
                  })}
                </Nav>
              )
            })}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
