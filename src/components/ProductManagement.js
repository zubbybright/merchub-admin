import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Row, Card, Table, Col, Container, Dropdown, DropdownButton } from 'react-bootstrap';
//import { useSelector } from 'react-redux';
import FetchProducts from './FetchProducts';

export default function ProductManagement() {
    // const categories = useSelector(state => state.category.categories);
    // const products = useSelector(state => state.product.products.products);


    return (
        <Container fluid>
            <Row>
                <Col>
                    <Header
                        firstLink='Dashboard'
                        firstLinkHeader='/dashboard'
                        secondLink='Upload Product'
                        secondLinkHeader='/'
                        thirdLink='Profile'
                        thirdLinkHeader='/'
                    />
                </Col>
            </Row>
            <Row>
                <Col style={{ textAlign: 'center', marginTop: "3rem" }}>
                    <FetchProducts />
                </Col>
            </Row>
            <Row className='top-buffer'>
                <Col>
                    <Card>
                        <Card.Title className='text-center'>Products</Card.Title>
                        <Table className='top-buffer' striped bordered hover >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Availabilty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>SOLD_OUT</td>
                                    <td>
                                    <DropdownButton id="dropdown-basic-button" title="Manage Product">
                                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                    </DropdownButton>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>SOLD_OUT</td>
                                    <td>
                                    <DropdownButton id="dropdown-basic-button" title="Manage Product">
                                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                    </DropdownButton>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Larry the Bird</td>
                                    <td>Terry</td>
                                    <td>@twitter</td>
                                    <td>SOLD_OUT</td>
                                    <td>
                                    <DropdownButton id="dropdown-basic-button" title="Manage Product">
                                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                    </DropdownButton>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col><Footer /></Col>
            </Row>
        </Container>
    )
}