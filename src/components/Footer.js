import React from 'react';
import { Row, Col} from 'react-bootstrap';

export default function Footer(){
    return(  
        <Row>
        <Col style = {{textAlign:'center', marginTop:"3rem"}}>
           <span>© 2021 Merchub. All Rights Reserved.</span> 
        </Col>  
        </Row>
    )

}