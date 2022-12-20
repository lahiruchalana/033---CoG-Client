import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import ItemBoxInCart from "../../components/item_box/ItemBoxInCart";
import Button from 'react-bootstrap/Button';


function Cart() {
    const [cart, setCart] = useState([])

    const cartItems = [
        {cartId: 2, userId: 3, itemId: 56, itemName: "Scooter Ed", shortDescription: "perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 2, imageUrl: "https://pngimg.com/uploads/scooter/scooter_PNG11329.png"}, 
        {cartId: 2, userId: 3, itemId: 34, itemName: "Wheel Chair", shortDescription: "perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 1, imageUrl: "https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png"},
        {cartId: 2, userId: 3, itemId: 6, itemName: "Party Item DF", shortDescription: "perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 3, imageUrl: "https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png"},
        {cartId: 2, userId: 3, itemId: 8, itemName: "Scooter Ed", shortDescription: "perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 5, imageUrl: "https://pngimg.com/uploads/scooter/scooter_PNG11329.png"},
        {cartId: 2, userId: 3, itemId: 99, itemName: "Medical Item AS", shortDescription: "perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 1, imageUrl: "https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png"},
        {cartId: 2, userId: 3, itemId: 46, itemName: "Stroller Ed", shortDescription: "perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 1, imageUrl: "https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png"}
    ]

    useEffect(() => {
        setCart(cartItems);
    }, [cart.length])

    return (
        <div>
            <Header/>
            <div style={{ marginLeft: "40px", marginRight: "40px" }}>
                <Row>
                    <Col sm={10}>
                        <h5 style={{ textAlign: "left", marginLeft: "50px"}}>My Cart</h5>
                        <div className="line_break_small"></div>
                        <br></br>
                        {
                            cart.map((item, key) => {
                                return <ItemBoxInCart cartItem={item} />
                            })
                        }
                    </Col>
                    <Col sm={2}>
                        <br></br>
                        <h5>Cart SubTotal: $15.25</h5>
                        <h5>Total Cart Items: 6</h5>
                        <br></br>
                        <Row>
                            <Button id="go_to_checkout_button" variant="primary">Go To Checkout</Button>
                        </Row>
                        <Row>
                            <Button id="more_items_button" variant="primary">More Items</Button>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default Cart;