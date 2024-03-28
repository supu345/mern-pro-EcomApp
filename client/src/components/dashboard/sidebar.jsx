import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div className="col ">
            <Navbar.Brand>Dashbord</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <div className="col ">
                  <Nav.Link>
                    <NavLink to="/CreateProductList">List</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/CreateProduct">Create</NavLink>
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Sidebar;
