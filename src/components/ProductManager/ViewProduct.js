import React , {useEffect, useState} from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Table, Button} from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import {getProductById} from '../agents/api';
import { useDispatch } from 'react-redux';
import { productFetchedById } from '../../redux/actions';


export default function ViewProduct() {
    const { prodId } = useParams();
    const dispatch = useDispatch();
    const [specificProduct, setSpecificProduct] = useState({"product":{},
    "detail":{}});
    console.log(prodId);

    dispatch(productFetchedById(specificProduct));
    useEffect(() => {
        async function fetchProductById() {
            try {
                let response = await getProductById(prodId);
               console.log(response);
               setSpecificProduct(response)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchProductById()
      }, [dispatch, prodId]);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Header
                        firstLink='Dashboard'
                        firstLinkHeader='/dashboard'
                        secondLink='Product Management'
                        secondLinkHeader='/'
                        thirdLink='Profile'
                        thirdLinkHeader='/'
                    />
                </Col>
            </Row>
            <Row className='top-buffer'>
                <Col>
                    <Card>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th> Name</th>
                                    <th>Price</th>
                                    <th>Availability</th>
                                    <th>Description</th>
                                    <th>Manufacturer</th>
                                    <th>Expiry</th>
                                    <th>Nafdac No</th>
                                </tr>
                            </thead>
                            <tbody>
                                {specificProduct &&
                                <tr>
                                    <td>{specificProduct.product.id}</td>
                                    <td>{specificProduct.product.name}</td>
                                    <td>{specificProduct.product.price}</td>
                                    <td>{specificProduct.product.availability}</td>
                                    <td>{specificProduct.detail.description}</td>
                                    <td>{specificProduct.detail.manufacturer}</td>
                                    <td>{specificProduct.detail.expiry_date}</td>
                                    <td>{specificProduct.detail.nafdac_reg_no}</td>
                                    <td>
                                    <Button variant='info' className='mr-1' href='#'>Edit</Button>
                                    <Button variant='danger' className='mr-1' href='#'>Delete</Button>
                                    </td>
                                </tr>
                                }
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