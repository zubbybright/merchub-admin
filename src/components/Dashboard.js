import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Dashboard.css';
import { Row, Card, Table, Col, Container, Dropdown,DropdownButton } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import { fetchCategories, fetchProducts} from './agents/api';
import { categoriesFetch , productsFetched } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function Dashboard() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);
    const products = useSelector(state=> state.product.products.products);
    const [countProducts, setCountProducts] = useState(0);
    console.log(products);
    const [availability, setAvailability] = useState([]);
    console.log(availability);

    useEffect(() => {
        async function fetchAllCategories() {
            try {
                let categories = await fetchCategories();
                dispatch(categoriesFetch(categories));
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchAllCategories()
    }, [dispatch]);

    const categoryProducts = async(catId)=>{
        try{
           let prods = await fetchProducts(catId);
           dispatch(productsFetched(prods));
           setCountProducts(products.length);
        //   
        }
        catch(error){
            console.log(error);
        }
        setAvailability(products.map((x) => x.availability));
    }

    let cateNames = categories.map((x) =>x.name); 
    
    const CategoryList = {
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
    
//Display of Availability Ration in Chart
    let StockCounts = {};
    availability.forEach(function(x) { StockCounts[x] = (StockCounts[x] || 0)+1; });
   
    const AvailabilityRatio = {
        labels: ['In Stock', 'Out of Stock'],
        datasets: [
            {
                label: 'Stock Rate',
                backgroundColor: ['rgba(75,192,192,1)', 'pink'],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [StockCounts.IN_STOCK?StockCounts.IN_STOCK:0, 
                    StockCounts.SOLD_OUT ? StockCounts.SOLD_OUT:0 ]
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

                    <Card text='info'>
                        <Card.Body>
                            <Card.Title >
                                Number of Products Of Selected Category
                            </Card.Title>
                            <Card.Text className= "product-number">
                                 {countProducts} 
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Body>
                            <Bar
                                data={CategoryList}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Available Categories',
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
                            <div>
                                <Pie
                                    data={AvailabilityRatio}
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