import React , {useEffect, useState} from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Table} from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import {deleteProduct, getProductById} from '../agents/api';
import { useDispatch } from 'react-redux';
import { productFetchedById } from '../../redux/actions';


export default function ViewProduct() {
    const { prodId } = useParams();
    const dispatch = useDispatch();
    const [specificProduct, setSpecificProduct] = useState({"product":{},
    "detail":{}});
    const [deleted, setDeleted] = useState(false);

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

      const productDelete = async ()=>{
        try{
            await deleteProduct(prodId);
            alert('Product Deleted');
            // window.location.reload();
        }
        catch(e){
            console.log(e);
        }
        setDeleted(true);
      }

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
                            {!deleted ?
                            <tbody>
                                {specificProduct && 
                                <tr>
                                   
                                    <td>{specificProduct.product.id }</td>
                                    <td>{specificProduct.product.name}</td>
                                    <td>{specificProduct.product.price}</td>
                                    <td>{specificProduct.product.availability}</td>
                                    <td>{specificProduct.detail.description}</td>
                                    <td>{specificProduct.detail.manufacturer}</td>
                                    <td>{specificProduct.detail.expiry_date}</td>
                                    <td>{specificProduct.detail.nafdac_reg_no}</td>
                                    <td>
                                  
                                    <Link className='mr-1'  style={{'fontWeight':'bold'}} to={'/edit/'+prodId}>Edit|</Link>
                                    <Link className='mr-1' style={{ 'fontWeight':'bold','color':'red'}} onClick={productDelete}>|Delete</Link>
                                    </td>
                                </tr>
                                }    
                            </tbody>
                            :
                            <tbody>
                            <tr>   
                                <td>Deleted Product</td>
                                <td>Deleted Product</td>
                                <td>Deleted Product</td>
                                <td>Deleted Product</td>
                                <td>Deleted Product</td>
                                <td>Deleted Product</td>
                                <td>Deleted Product</td>
                                <td>Deleted Product</td>
                                <td> 
                                {/* <Link className='mr-1'  style={{'fontWeight':'bold'}} to={'/edit/'+prodId} disabled>Edit|</Link>
                                <Link className='mr-1' style={{ 'fontWeight':'bold','color':'red'}} onClick={productDelete} disabled>|Delete</Link> */}
                                </td>
                            </tr>
                            </tbody>
                            }
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