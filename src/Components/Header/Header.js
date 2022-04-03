import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='shadow-sm'>
        
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='websiteName'>Car Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='link' to="/">Home</NavLink>
                        <NavLink className='link' to="/reviews">Reviews</NavLink>
                        <NavLink className='link' to="/dashboard">Dashboard</NavLink>
                        <NavLink className='link' to="/about">About</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;