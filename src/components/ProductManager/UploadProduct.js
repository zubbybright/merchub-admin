import React, { useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Header from '../Header';
import '../css/UploadProduct.css';
import {uploadProduct} from '../agents/api';

export default function UploadProduct() {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [nafdac, setNafdac] = useState('');
    const [manufacturer, setManufacturer]= useState('');
    const [expiry, setExpiry] = useState('');
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();

    const onChangeProductName = (evt)=>{
        setProductName(evt.target.value);
    }

    const onChangeCategory =(evt)=>{
        setCategory(evt.target.value);
    }
    const onChangeDescription =(evt)=>{
        setDescription(evt.target.value);
    }
    const onChangePrice =(evt)=>{
        setPrice(evt.target.value);
    }
    const onChangeManufacturer =(evt)=>{
        setManufacturer(evt.target.value);
    }
    const onChangeNafdac =(evt)=>{
        setNafdac(evt.target.value);
    }
    const onChangeExpiry =(evt)=>{
        setExpiry(evt.target.value);
    }
    const image1handler =(evt)=>{
        setImage1(evt.target.file);
    }
    const image2handler =(evt)=>{
        setImage2(evt.target.file);
    }
    const image3handler =(evt)=>{
        setImage3(evt.target.file);
    }

    const upload = async()=>{
        try{
            console.log('uploading');
            await uploadProduct(productName,category,price,description,
                manufacturer,nafdac,expiry,image1,image2,image3);
        }
        catch(error){
           console.log(error);
        }
      
    }
   
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
                                    <Form.Control type="text" placeholder="Product name" value = {productName} onChange={onChangeProductName}/>
                                    <Form.Label>
                                        Category
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Product category" value ={category} onChange={onChangeCategory} />
                                    <Form.Label>
                                        Description
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Product description" value = {description} onChange={onChangeDescription} />
                                    <Form.Label>
                                        Price
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Product Price" value = {price} onChange={onChangePrice} />
                                    <Form.Label>
                                        Manufacturer
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Product Manufacturer" value = {manufacturer} onChange={onChangeManufacturer} />
                                    <Form.Label>
                                        Nafdac Reg No
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Nafdac No" value = {nafdac} onChange={onChangeNafdac}/>
                                    <Form.Label>
                                        Expiry Date
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Expiry" value = {expiry} onChange={onChangeExpiry} />
                                    <Form.Label>
                                       Primary Image
                                    </Form.Label>
                                    <Form.Control type="file" value = {image1} onChange={image1handler} />
                                    <Form.Label>
                                       Other Images
                                    </Form.Label>
                                    <Form.Control type="file" value = {image2} onChange={image2handler} />
                                    <Form.Control type="file" value = {image3} onChange={image3handler} />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={upload}>
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