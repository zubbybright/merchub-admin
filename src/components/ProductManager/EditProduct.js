import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import '../css/UploadProduct.css';

export default function EditProduct() {

    return (
        <Container fluid className='App-body'>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col className='offset-4'>
                    <Card className='form-card w-50' >
                        <Col >
                            <form className='form'>
                                <label>
                                    Product Name
                                    </label>
                                <input type="text" name= 'productName' placeholder="Product name" />
                                <label>
                                    Category
                                    </label>
                                <input type="text" name= 'category' placeholder="Product category" />
                                <label>
                                    Description
                                    </label>
                                <input type="text" name= 'description' placeholder="Product description" />
                                <label>
                                   
                                    Product Price
                                    </label>
                                <input type="text" name= 'price' placeholder="Product Price"  />
                                <label>
                                    Manufacturer
                                    </label>
                                <input type="text" name= 'manufacturer' placeholder="Product Manufacturer"  />
                                <label>
                                    Nafdac Reg No
                                    </label>
                                <input type="text" name= 'nafdac' placeholder="Nafdac No" />
                                <label>
                                    Expiry Date
                                    </label>
                                <input type="text" name= 'expiry' placeholder="dd-mm-yy" />
                                <label>
                                    Primary Image (Required)
                                    </label>
                                <input type="file" name='image1' required />
                                <label>
                                    Other Images(Optional)
                                    </label>
                                <input type="file" name='image2' />
                                <input type="file" name='image3' />
                                < button type='button' >
                                    Save
                                </button>
                            </form>
                        </Col>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col><Footer /></Col>
            </Row>
        </Container>
    );

}