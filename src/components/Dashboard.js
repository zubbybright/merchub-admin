import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Dashboard.css';
import { Row, Card, Table, Col, Container } from 'react-bootstrap';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';


export default function Dashboard() {

    const Monthly = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Orders',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }
    const Weekly = {
        labels: ['Mon', 'Tues', 'Wed',
            'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Orders',
                backgroundColor: ['rgba(75,192,192,1)', 'green', 'gray', 'orange', 'red', 'yellow', 'purple'],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56, 80, 20]
            }
        ]
    }
    const SalesRatio = {
        labels: ['In Stock', 'Out of Stock'],
        datasets: [
            {
                label: 'Stock Rate',
                backgroundColor: ['rgba(75,192,192,1)', 'pink'],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [80, 56]
            }
        ]
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Header firstLink='Dashboard'
                        firstLinkHeader='/dashboard'
                        secondLink='Products Management'
                        secondLinkHeader='/'
                        thirdLink='Profile'
                        thirdLinkHeader='/'
                    />
                </Col>
                
            </Row>

            <Row className='top-buffer'>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title>Monthly Orders</Card.Title>
                            <div>
                                <Bar
                                    data={Monthly}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'Average Orders per month',
                                            fontSize: 20
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title>Weekly Orders</Card.Title>
                            <Doughnut
                                data={Weekly}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Average Orders per week',
                                        fontSize: 20
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title>Orders Ratio</Card.Title>
                            <div>
                                <Pie
                                    data={SalesRatio}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'Ratio of sales',
                                            fontSize: 20
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='top-buffer'>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title> Comparison of products by categories</Card.Title>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Category</th>
                                        <th>In stock</th>
                                        <th>Sold Out</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Shoes</td>
                                        <td>12</td>
                                        <td>24</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Cosmetics</td>
                                        <td>39</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td >Books</td>
                                        <td>59</td>
                                        <td>12</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col><Footer/></Col>
            </Row>
        </Container>

    )
}