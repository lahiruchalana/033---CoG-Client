import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

function ItemBoxInCart(props) {

    return(
        <div>
            <Row style={{ marginRight: "30px" }}>
                <Col sm={4}>
                    <img id="item_image_in_cart" src={props.cartItem.imageUrl}></img>
                </Col>
                <Col style={{ textAlign: "left" }} sm={4}>
                    <h4>{props.cartItem.itemName}<Button style={{ fontSize: "10px", fontWeight: "600", padding: "3px", marginLeft: "10px" }} variant="info">{props.cartItem.rentOrSell}</Button></h4>
                    <Rating 
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar color="gold"/>}
                        placeholderSymbol={<FaStar color="gold"/>}
                        placeholderRating={props.cartItem.rate}
                    />
                    <br></br>
                    <h9>{props.cartItem.shortDescription}<a href="/#">see the product..</a></h9>
                </Col>
                <Col style={{ display: "block",  marginLeft: "auto", marginRight: "auto"}} sm={3}>
                    <Row>
                        <Col>
                            <Button id="increment_decrement_button" variant="outline-info">-</Button>
                        </Col>
                        <Col>
                            <h6 style={{ color: "green" }}>Quant: {props.cartItem.quantity}</h6>
                        </Col>
                        <Col>
                            <Button id="increment_decrement_button" variant="outline-info">+</Button>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>    
                        <Button id="remove_from_cart_button" variant="secondary">Remove From Cart</Button>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default ItemBoxInCart;