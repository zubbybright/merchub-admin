import React, { useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import '../css/UploadProduct.css';
import { uploadProduct } from '../agents/api';

export default function UploadProduct() {

    const initialValues = {
        productName: "",
        category: "",
        price: "",
        description: "",
        nafdac: "",
        manufacturer:"",
        expiry:"",
    };

    const initialImages ={
        image1:null,
        image2:null,
        image3:null
    }
    const [values, setValues] = useState(initialValues);
    const [images, setImages] = useState(initialImages);
    // const [image2, setImage2] = useState(null);
    // const [image3, setImage3] = useState(null);

    // console.log(image2);

    const onChangeField = (event) =>{
        const { name, value } = event.target;

        setValues({
          ...values,
          [name]: value,
        });
        
    }

    const onChangeImage  = (event) => {
        const {name, files} = event.target
        setImages({
            ...images,
            [name]:files[0]
        })
    }

    // const image1handler = (evt) => {
    //     setImage1(evt.target.files[0]); 
    // }
    // const image2handler = (evt) => {
    //     setImage2(evt.target.files[0]);
    // }
    // const image3handler = (evt) => {
    //     setImage3(evt.target.files[0]);
    // }

    const upload = async () => {
        const data = new FormData()
        data.append('image1', images.image1);

        if(images.image2 != null) {
            data.append('image2', images.image2);
        }
        if(images.image3 != null) {
            data.append('image3', images.image3);
        }
        
        data.append('name', values.productName);
        data.append('category', values.category);
        data.append('manufacturer', values.manufacturer);
        data.append('price',values.price);
        data.append('description',values.description);
        data.append('expiry', values.expiry);
        data.append('nafdac_no',values.nafdac);
        
        try {
            console.log('uploading');
            await uploadProduct(data);
            console.log('uploaded');
        }
        catch (error) {
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
                                <input type="text" name= 'productName' placeholder="Product name" value={values.productName} onChange={onChangeField} />
                                <label>
                                    Category
                                    </label>
                                <input type="text" name= 'category' placeholder="Product category" value={values.category} onChange={onChangeField} />
                                <label>
                                    Description
                                    </label>
                                <input type="text" name= 'description' placeholder="Product description" value={values.description} onChange={onChangeField} />
                                <label>
                                   
                                    Product Price
                                    </label>
                                <input type="text" name= 'price' placeholder="Product Price" value={values.price} onChange={onChangeField} />
                                <label>
                                    Manufacturer
                                    </label>
                                <input type="text" name= 'manufacturer' placeholder="Product Manufacturer" value={values.manufacturer} onChange={onChangeField} />
                                <label>
                                    Nafdac Reg No
                                    </label>
                                <input type="text" name= 'nafdac' placeholder="Nafdac No" value={values.nafdac} onChange={onChangeField} />
                                <label>
                                    Expiry Date
                                    </label>
                                <input type="text" name= 'expiry' placeholder="dd-mm-yy" value={values.expiry} onChange={onChangeField} />
                                <label>
                                    Primary Image (Required)
                                    </label>
                                <input type="file" name='image1' onChange={onChangeImage} required />
                                <label>
                                    Other Images(Optional)
                                    </label>
                                <input type="file" name='image2' onChange={onChangeImage} />
                                <input type="file" name='image3' onChange={onChangeImage} />
                                < button type='button' onClick={upload}>
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