import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Row, Card, Table, Col, Container, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import FetchProducts from './FetchProducts';
import { Link } from 'react-router-dom'

export default function ProductManagement() {
    // const categories = useSelector(state => state.category.categories);
    const products = useSelector(state => state.product.products);
    const selectedCategory = useSelector(state => state.common.selectedValue);

    // const [show, setShow] = useState(false);

    // console.log(products);
    console.log(selectedCategory);
    // const productDelete = async (id) => {
    //     try {
    //         await deleteProduct(id);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row className='pb-4 ml-2 mr-3 sub-panel'>
                <Col >
                    <FetchProducts />
                </Col>
                <Col style={{ textAlign: 'center', marginTop: "2rem" }}><Link className='bg-primary text-white p-2 ' to="/upload">Upload A Product</Link>  </Col>
            </Row>
            <Row className='top-buffer'>
                <Col>
                    <Card>
                        {selectedCategory ?
                            <Card.Title className='text-center mt-3'>Products In {selectedCategory} Category</Card.Title>
                            :
                            <Card.Title className='text-center  mt-3'>Select Category To View Products</Card.Title>
                        }
                    
                        <Table className='top-buffer' striped bordered hover >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Availabilty</th>
                                </tr>
                            </thead>
                            {
                                !selectedCategory &&
                                <tbody >
                                    <tr >
                                        <td>No selected category</td>
                                        <td>No selected category</td>
                                        <td>No selected category</td>
                                        <td>No selected category</td>
                                        <td>
                                            <Button disabled href="#">No Selected Category</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            }
                            {products.products && products.products.map((x, i) =>
                                <tbody key={i}>
                                    <tr key={x}>
                                        <td>{x.id}</td>
                                        <td>{x.name}</td>
                                        <td>{x.price}</td>
                                        <td>{x.availability}</td>
                                        <td>
                                        <Link  className='mr-1' to={'/'+x.id}>View</Link>
                                           
                                        </td>
                                    </tr>
                                </tbody>
                            )}

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