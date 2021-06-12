import React from 'react';
import Logout from './Logout';
import './css/Header.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

export default function Header() {

    return (
        <Container fluid>
            <Row className='wrapper'>
                <Col>
                    <Navbar className = 'justify-content-center'>
                        <Col>
                            <Navbar.Brand href="/dashboard"> <img className="header-logo" src="/images/logo.png" alt="logo"></img></Navbar.Brand>
                        </Col>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" >
                                <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                                <Nav.Link href='/products'>Product Management</Nav.Link>
                                <Nav.Link href='#'>Profile</Nav.Link>
                            </Nav>
                            <Navbar.Brand><Logout /></Navbar.Brand>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>

            </Row>
        </Container>


    );
}