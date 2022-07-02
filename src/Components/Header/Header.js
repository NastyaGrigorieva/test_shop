import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Shop</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                       
                        </Nav>
                    </Container>
                </Navbar>

        </div>
    );
};

export default Header;