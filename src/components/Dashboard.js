import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Dashboard.css';
import { Row, Card, Table, Col, Container} from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import FetchProducts from './FetchProducts';

export default function Dashboard() {
    const categories = useSelector(state => state.category.categories);
    const countProducts = useSelector(state=> state.product.productsCount);
    console.log(countProducts);
    const availability= useSelector(state=> state.product.productsAvailability);
    const selectedCategory = useSelector(state => state.common.selectedValue);

    console.log(availability);
    console.log(selectedCategory);

    //TO DO:
    //count the number of products that are in stock for each category.
    
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
                        secondLinkHeader='/products'
                        thirdLink='Profile'
                        thirdLinkHeader='/'
                    />
                </Col>

            </Row>
            <Row>
                <Col style={{ textAlign: 'center', marginTop: "3rem" }}>
                    <FetchProducts/>
                </Col>
               
            </Row>
            <Row className='top-buffer'>
                <Col>

                    <Card text='info'>
                        <Card.Body>
                            <Card.Title >
                                Selected Category :
                            </Card.Title>
                            <Card.Text className= "selected-category">
                                 {selectedCategory} 
                            </Card.Text>

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
                                           
                                            <td >{StockCounts.IN_STOCK}</td>
                                            <td >{StockCounts.SOLD_OUT}</td>
                                           
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