import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ItemBoxInCart(props) {

    return(
        <div>
            <Row>
                <Col sm={4}>
                    <img id="item_image_in_cart" src={props.cartItem.imageUrl}></img>
                </Col>
                <Col style={{ textAlign: "left" }} sm={4}>
                    <h4>{props.cartItem.itemName}</h4>
                    <h7>{props.cartItem.shortDescription}</h7>
                </Col>
                <Col style={{ display: "block",  marginLeft: "auto", marginRight: "auto"}} sm={3}>
                    <Row>
                        <h6 style={{ color: "green" }}>Quanity: {props.cartItem.quantity}</h6>
                    </Row>
                    <Row>
                        <Button id="proceed_to_checkout_button" variant="warning">Proceed To Checkout</Button>
                    </Row>
                    <Row>
                        <Button id="change_selections_button" variant="info">Change Selections</Button>
                    </Row>
                    <Row>    
                        <Button id="remove_from_cart_button" variant="secondary">Remove From Cart</Button>
                    </Row>
                </Col>
            </Row>
            <br></br>
            <div className="line_break_small"></div>
            <br></br>
        </div>
    )
}

export default ItemBoxInCart;