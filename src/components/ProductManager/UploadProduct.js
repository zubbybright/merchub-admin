import React, { useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
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
        setImage1(evt.target.files[0]);
    }
    const image2handler =(evt)=>{
        setImage2(evt.target.file);
    }
    const image3handler =(evt)=>{
        setImage3(evt.target.file);
    }

    const upload = async()=>{
        const formData = new FormData();
        formData.append('name',productName);
        formData.append("image1", image1);
        formData.append('nafdac_no',nafdac);
        formData.append('category',category);
        formData.append("price", price);
        formData.append('description',description);
        formData.append('manufacturer',manufacturer);
        formData.append("image2", image2);
        formData.append('image3',image3);
        formData.append('expiry',expiry);

        try{
            console.log('uploading');
            await uploadProduct(formData);
            console.log('uploaded');
        }
        catch(error){
           console.log(error);
        }
      
    }
   
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
                                    <input type="text" placeholder="Product name" value = {productName} onChange={onChangeProductName}/>
                                    <label>
                                        Category
                                    </label>
                                    <input type="text" placeholder="Product category" value ={category} onChange={onChangeCategory} />
                                    <label>
                                        Description
                                    </label>
                                    <input type="text" placeholder="Product description" value = {description} onChange={onChangeDescription} />
                                    <label>
                                        Price
                                    </label>
                                    <input type="text" placeholder="Product Price" value = {price} onChange={onChangePrice} />
                                    <label>
                                        Manufacturer
                                    </label>
                                    <input type="text" placeholder="Product Manufacturer" value = {manufacturer} onChange={onChangeManufacturer} />
                                    <label>
                                        Nafdac Reg No
                                    </label>
                                    <input type="text" placeholder="Nafdac No" value = {nafdac} onChange={onChangeNafdac}/>
                                    <label>
                                        Expiry Date
                                    </label>
                                    <input type="text" placeholder="Expiry" value = {expiry} onChange={onChangeExpiry} />
                                    <label>
                                       Primary Image
                                    </label>
                                    <input type="file" value = {image1} onChange={image1handler} />
                                    <label>
                                       Other Images
                                    </label>
                                    <input type="file" value = {image2} onChange={image2handler} />
                                    <input type="file" value = {image3} onChange={image3handler} />
                                < button type='button'  onClick={upload}>
                                   Upload
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