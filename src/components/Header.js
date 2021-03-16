import React from 'react';
import Logout from './Logout';
import './css/Header.css';
import { Container,Nav, NavDropdown, Navbar, Form,FormControl,Button, Row, Col } from 'react-bootstrap';

export default function Header({
    firstLink,
    secondLink, 
    thirdLink,
    firstLinkHeader,
    secondLinkHeader,
    thirdLinkHeader
    }){
    return(
        <Container fluid>
            <Row>
            <Col>
            <Navbar bg="light" expand="lg">
           <Col>
            <Navbar.Brand href="/dashboard"> <img className="logo" src="./logo.png" alt="logo"></img></Navbar.Brand>
           </Col>
         
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto">
               <Nav.Link href={firstLinkHeader}>{firstLink}</Nav.Link>
               <Nav.Link href={secondLinkHeader}>{secondLink}</Nav.Link>
               <Nav.Link href={thirdLinkHeader}>{thirdLink}</Nav.Link>
               <NavDropdown title="Categories" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
               </NavDropdown>
           </Nav>
           <Navbar.Brand><Logout /></Navbar.Brand>
           </Navbar.Collapse>
           </Navbar>
            </Col>

            </Row>   
        </Container>
        
      
    );
}