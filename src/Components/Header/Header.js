import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='shadow-sm'>
            <Navbar  bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Car Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/reviews">Reviews</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        </div>
    );
};

export default Header;