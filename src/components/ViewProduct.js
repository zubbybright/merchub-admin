import React , {useEffect} from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Table, Button} from 'react-bootstrap';
import Header from './Header';
import {getProductById} from './agents/api';
import { useDispatch, useSelector } from 'react-redux';
import { productFetchedById } from '../redux/actions';


export default function ViewProduct() {
    const { prodId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state=> state.product.specificProduct);
    // console.log(prodId);
    console.log(product);

    useEffect(() => {
        async function fetchProductById() {
            try {
                let response = await getProductById(4);
                dispatch(productFetchedById(response));
               console.log(response);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchProductById()
      }, [dispatch]);

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
                                <tr>
                                    <td>{product.product.id}</td>
                                    <td>{product.product.name}</td>
                                    <td>{product.product.price}</td>
                                    <td>{product.product.availability}</td>
                                    <td>{product.detail.description}</td>
                                    <td>{product.detail.manufacturer}</td>
                                    <td>{product.detail.expiry_date}</td>
                                    <td>{product.detail.nafdac_reg_no}</td>
                                    <td>
                                    <Button variant='info' className='mr-1' href='#'>Edit</Button>
                                    <Button variant='danger' className='mr-1' href='#'>Delete</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </Container>

    )

}