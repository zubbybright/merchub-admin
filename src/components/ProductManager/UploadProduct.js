import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Header from '../Header';
import '../css/UploadProduct.css';


export default function UploadProduct() {


    return (
        <Container fluid>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col className='offset-4'>
                    <Card className='form-card w-50' >
                        <Col >
                            <Form className='form'>
                                <Form.Group>
                                    <Form.Label>
                                        Product Name
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Product name" />
                                    <Form.Label>
                                        Category
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Product category" />
                                    <Form.Label>
                                        Description
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Product description" />
                                    <Form.Label>
                                        Price
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Product Price" />
                                    <Form.Label>
                                        Manufacturer
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Product Manufacturer" />
                                    <Form.Label>
                                        Nafdac Reg No
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Nafdac No" />
                                    <Form.Label>
                                        Expiry Date
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Expiry" />
                                    <Form.Label>
                                       Primary Image
                                    </Form.Label>
                                    <Form.Control type="file" placeholder="Nafdac No" />
                                    <Form.Label>
                                       Other Images
                                    </Form.Label>
                                    <Form.Control type="file" placeholder="Nafdac No" />
                                    <Form.Control type="file" placeholder="Nafdac No" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                   Upload
                                </Button>
                            </Form>
                        </Col>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

}