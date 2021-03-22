import React, { useState }  from 'react';
import { useDispatch,useSelector } from "react-redux";
import {  fetchProducts} from './agents/api';
import { productsCounted, productsFetched, productsAvailabilityLoaded, valueSelected } from '../redux/actions';
import { Row,  Col, Dropdown,DropdownButton } from 'react-bootstrap';


export default function FetchProducts() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);
    const products = useSelector(state=> state.product.products);
    const [prodsByCategory , setProdsByCategory] = useState({"products":[],
    "detail":[], "images":[]});
    console.log(products);
  
    // useEffect(()=>{
    //     if (products === undefined){
    //         products = []
    //     }
    // });

    const categoryProducts = async (catId) => {
        try {
            let prods = await fetchProducts(catId);
            setProdsByCategory(prods);
            dispatch(productsFetched(prodsByCategory));
            console.log(prodsByCategory.products.length);
            dispatch(productsCounted(prodsByCategory.products.length));
            let stockState = prodsByCategory.products.map((x) => x.availability);

            dispatch(productsAvailabilityLoaded(stockState));
            // console.log(stockState);
            // console.log(products);
        }
        catch (error) {
            console.log(error);
        }
    }
    const handleSelect=(e)=>{
        console.log(e);
        dispatch(valueSelected(e));
    }

    return (
        <Row>
            <Col style={{ textAlign: 'center', marginTop: "2rem" }}>
                <DropdownButton id="dropdown-basic-button" onSelect={handleSelect} title="Sort Data By Category">
                    {categories && categories.map((x) =>
                        <Dropdown.Item as="button" eventKey={x.name} value={x.name} key={x.id} onClick={() => { categoryProducts(x.id); }}>{x.name}</Dropdown.Item>
                    )}
                </DropdownButton>
            </Col>        
        </Row> 
    )
    

}