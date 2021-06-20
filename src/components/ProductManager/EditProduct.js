import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams} from "react-router-dom";

import { categoryFetchedById } from '../../redux/actions';
import {getCategoryById} from '../agents/api';
import Header from '../Header';
import Footer from '../Footer';
import '../css/UploadProduct.css';
import { editProduct } from '../agents/api';

export default function EditProduct() {
    const dispatch = useDispatch();
    const {prodId} = useParams();
    const product = useSelector(state => state.product.specificProduct);
    const catId = product.product.category_id;
    const specificCategory = useSelector(state => state.category.specificCategory);
    const defaultImages = product.images[0];
    console.log(specificCategory.name);

    const initialValues = {
        productName: product.product.name,
        category: specificCategory.name,
        price: product.product.price,
        description: product.detail.description,
        nafdac: product.detail.nafdac_reg_no,
        manufacturer: product.detail.manufacturer,
        expiry: product.detail.expiry_date,
    };

    const initialImages ={
        image1:defaultImages.image1,
        image2:defaultImages.image2,
        image3:defaultImages.image3
    }

    const [values, setValues] = useState(initialValues);
    const [images, setImages] = useState(initialImages);


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

    const save = async () => {
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
            console.log('saving...');
            await editProduct(data,prodId);
            console.log('product edited');
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        async function fetchCategoryById() {
            try {
                let category = await getCategoryById(catId);
                dispatch(categoryFetchedById(category));
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchCategoryById()
      }, [dispatch, catId]);
    
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
                                <input type="text" name= 'productName' value={values.productName} onChange={onChangeField} placeholder="Product name" />
                                <label>
                                    Category
                                    </label>
                                <input type="text" name= 'category' value = {values.category} onChange={onChangeField} placeholder="Product category" />
                                <label>
                                    Description
                                    </label>
                                <input type="text" name= 'description' value = {values.description} onChange={onChangeField} placeholder="Product description" />
                                <label>
                                   
                                    Product Price
                                    </label>
                                <input type="text" name= 'price' value = {values.price} onChange={onChangeField} placeholder="Product Price"  />
                                <label>
                                    Manufacturer
                                    </label>
                                <input type="text" name= 'manufacturer' value = {values.manufacturer} onChange={onChangeField} placeholder="Product Manufacturer"  />
                                <label>
                                    Nafdac Reg No
                                    </label>
                                <input type="text" name= 'nafdac' value = {values.nafdac} onChange={onChangeField} placeholder="Nafdac No" />
                                <label>
                                    Expiry Date
                                    </label>
                                <input type="text" name= 'expiry' value = {values.expiry} onChange={onChangeField} placeholder="dd-mm-yy" />
                                <label>
                                    Primary Image (Required)
                                    </label>
                                <input type="file" name='image1' onChange={onChangeImage} />
                                <label>
                                    Other Images(Optional)
                                    </label>
                                <input type="file" name='image2' onChange={onChangeImage}/>
                                <input type="file" name='image3' onChange={onChangeImage} />
                                < button type='button' onClick={save} >
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