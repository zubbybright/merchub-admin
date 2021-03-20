import React from 'react';
import Logout from './Logout';
import './css/Header.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

export default function Header({
    firstLink,
    secondLink,
    thirdLink,
    firstLinkHeader,
    secondLinkHeader,
    thirdLinkHeader
}) {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Navbar className = 'justify-content-center' bg="light" expand="lg">
                        <Col>
                            <Navbar.Brand href="/dashboard"> <img className="logo" src="./logo.png" alt="logo"></img></Navbar.Brand>
                        </Col>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" >
                                <Nav.Link href={firstLinkHeader}>{firstLink}</Nav.Link>
                                <Nav.Link href={secondLinkHeader}>{secondLink}</Nav.Link>
                                <Nav.Link href={thirdLinkHeader}>{thirdLink}</Nav.Link>
                            </Nav>
                            <Navbar.Brand><Logout /></Navbar.Brand>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>

            </Row>
        </Container>


    );
}