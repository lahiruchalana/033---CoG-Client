import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import logo from '../../assets/Logo.webp';
import { MdShoppingCart } from 'react-icons/md';

function HeaderForAuth() {

    return(
        <div>
            {/* ----------- Starts, Main header for logo and login ----------- */}

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <a href="/">
                        <img className="logo_image" src={logo} alt="Logo" />
                    </a>
                    <Row >
                    <Col id="signup_button">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px', width: "90px" }}
                                navbarScroll
                            >
                                <Nav.Link style={{ fontSize: '16px' }} href="/user_registration">Sign up</Nav.Link>
                            </Nav>  
                        </Col>
                        <Col id="login_button">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px', width: "90px" }}
                                navbarScroll
                            >
                                <Nav.Link style={{ fontSize: '16px' }} href="/login">Log in</Nav.Link>                            
                            </Nav>  
                        </Col>
                    </Row>
                </Container>
            </Navbar>

            {/* ----------- Ends, Main header for logo and login ----------- */}
        </div>
    )

}

export default HeaderForAuth