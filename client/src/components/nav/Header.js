import React, { useState } from "react";
import {Nav, NavDropdown, Container, Navbar} from "react-bootstrap"
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";


const Header = () => {
    const [current, setCurrent] = useState("home");

    const handleClick = (e) => {
      // console.log(e.key);
      setCurrent(e.key);
    };
    return (
        <Navbar onClick={handleClick} selectedkeys={[current]}  bg="dark" variant="dark"
            sticky="top" expand="sm" collapseOnSelect>
            <Container fluid>
                <Navbar.Brand>
                    <img  width="40px" height="40px" />{' '}                    
                <Link to="/" className="link-light">Logo</Link>
                </Navbar.Brand>
                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav key="home">
                            <Link to="/" className="text-light nav-link d-flex">
                                <AppstoreOutlined style={{marginTop: "3px", marginRight:"5px"}}/>
                                <span>
                                    Home
                                </span>
                            </Link>
                        </Nav>
                        <Nav className="d-flex">
                            <NavDropdown className="light" title="Username" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">option 2</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                       
                    </Nav>
                    <Nav>
                        <Nav key="register">
                            <Link to="/register" className="nav-link text-light d-flex">
                                <UserAddOutlined style={{marginTop: "3px", marginRight:"5px"}}/>
                                <span>
                                    Register
                                </span>
                            </Link>
                        </Nav>
                        <Nav key="login" >
                            <Link to="/login" className="nav-link text-light d-flex">
                                <UserOutlined style={{marginTop: "3px", marginRight:"5px"}}/>
                                <span>
                                    Login
                                </span>
                            </Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;