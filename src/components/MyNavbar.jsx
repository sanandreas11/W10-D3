import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyNavbar = () => {
  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
      <Navbar.Brand href="/">
        <img
          src="assets/logo.png"
          alt="logo"
          style={{ width: "100px", height: "55px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link active className="font-weight-bold nav-link" to="/">
            Home
          </Link>
          <Link className="font-weight-bold nav-link" to="/tvshows">
            TV Shows
          </Link>
          <Link className="font-weight-bold nav-link" to="/">
            Movies
          </Link>
          <Link className="font-weight-bold nav-link" to="/">
            Recently Added
          </Link>
          <Link className="font-weight-bold nav-link" to="/">
            My List
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
