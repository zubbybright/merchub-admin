import React, {useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import {  fetchProducts} from './agents/api';
import { productsCounted, productsFetched } from '../redux/actions';
import { Row,  Col, Dropdown,DropdownButton } from 'react-bootstrap';


export default function FetchProducts() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);
    const products = useSelector(state=> state.product.products.products);
    const [availability, setAvailability] = useState([]);

    const categoryProducts = async (catId) => {
        try {
            let prods = await fetchProducts(catId);
            dispatch(productsFetched(prods));
            dispatch(productsCounted(products.length));
            console.log(products);
        }
        catch (error) {
            console.log(error);
        }
        setAvailability(products.map((x) => x.availability));

    }

    return (
        <Row>
            <Col style={{ textAlign: 'center', marginTop: "3rem" }}>
                <DropdownButton id="dropdown-basic-button" title="Sort Data By Category">
                    {categories && categories.map((x) =>
                        <Dropdown.Item as="button" value={x.name} key={x.id} onClick={() => { categoryProducts(x.id); }}>{x.name}</Dropdown.Item>
                    )}
                </DropdownButton>
            </Col>
        </Row> 
    )
    

}