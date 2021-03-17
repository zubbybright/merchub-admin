import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Dashboard.css';
import { Row, Card, Table, Col, Container, Dropdown,DropdownButton } from 'react-bootstrap';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import { fetchCategories, fetchProducts } from './agents/api';
import { categoriesFetch , productsFetched } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function Dashboard() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);
    const products = useSelector(state=> state.product.products);
    console.log(products.products);
    // console.log(categories);
    let cateNames = categories.map((x) =>x.name);  
    // let availability = products.map((x) => x.products);
    // console.log(availability);

    useEffect(() => {
        async function fetchAllCategories() {
            try {
                let categories = await fetchCategories();
                dispatch(categoriesFetch(categories));
            }
            catch (error) {
                console.log('error');
            }
        }
        fetchAllCategories()
    }, []);

    const categoryProducts = async(catId)=>{
        try{
           let prods = await fetchProducts(catId);
           dispatch(productsFetched(prods));
        }
        catch(error){
            console.log('error');
        }
    }

    const Monthly = {
        labels:  cateNames,
        datasets: [
            {
                label: 'Categories',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }
    const Weekly = {
        labels: cateNames,
        datasets: [
            {
                label: 'Categories',
                backgroundColor: ['rgba(75,192,192,1)', 'green', 'gray','pink', 'navy', 'orange', 'red', 'yellow', 'purple',],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56, 80, 20,90,45,70]
            }
        ]
    }
    const SalesRatio = {
        labels: ['In Stock', 'Out of Stock'],
        datasets: [
            {
                label: 'Stock Rate',
                backgroundColor: ['rgba(75,192,192,1)', 'pink'],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [80, 56]
            }
        ]
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Header firstLink='Dashboard'
                        firstLinkHeader='/dashboard'
                        secondLink='Products Management'
                        secondLinkHeader='/'
                        thirdLink='Profile'
                        thirdLinkHeader='/'
                    />
                </Col>

            </Row>
            <Row>
                <Col style={{ textAlign: 'center', marginTop: "3rem" }}>
                    <DropdownButton id="dropdown-basic-button" title="Sort Data By Category">
                    { categories && categories.map((x)=>
                        <Dropdown.Item as="button" key ={x.id} onClick = {() => { categoryProducts(x.id);}}>{x.name}</Dropdown.Item>
                    )}
                    </DropdownButton>
                </Col>
            </Row>
            <Row className='top-buffer'>
                <Col>

                    <Card >
                        <Card.Body>
                            <div>
                                <Bar
                                    data={Monthly}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'Number Of Products Per Category',
                                            fontSize: 20
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Body>
                            <Doughnut
                                data={Weekly}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Available Products',
                                        fontSize: 20
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title>Orders Ratio</Card.Title>
                            <div>
                                <Pie
                                    data={SalesRatio}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'Ratio of sales',
                                            fontSize: 20
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='top-buffer'>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title> Comparison of products by categories</Card.Title>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Category</th>
                                        <th>In stock</th>
                                        <th>Sold Out</th>
                                    </tr>
                                </thead>
                                {categories && categories.map((x, i) =>
                                    <tbody key={i}>
                                        <tr key={x}>
                                            <td key={x.id}>{x.id}</td>
                                            <td key={x.name}>{x.name}</td>
                                            <td >12</td>
                                            <td >24</td>
                                        </tr>
                                    </tbody>
                                )}
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col><Footer /></Col>
            </Row>
        </Container>

    )
}