import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import ItemBoxInCart from "../../components/item_box/ItemBoxInCart";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Cart() {
    const [cart, setCart] = useState([])
    const [selectedCartItems, setSelectedCartItems] = useState([])

    const cartItems = [
        {cartId: 2, userId: 3, itemId: 56, itemName: "Scooter Ed", shortDescription: "perspiciatis undvoluptue laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 2, imageUrl: "https://pngimg.com/uploads/scooter/scooter_PNG11329.png"}, 
        {cartId: 2, userId: 3, itemId: 34, itemName: "Wheel Chair", shortDescription: "perspiciatis uit voluptmque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 1, imageUrl: "https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png"},
        {cartId: 2, userId: 3, itemId: 6, itemName: "Party Item DF", shortDescription: "perspiciat voluptatem ae laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 3, imageUrl: "https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png"},
        {cartId: 2, userId: 3, itemId: 8, itemName: "Scooter Ed", shortDescription: "perspiciatis unde oluptatem a laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 5, imageUrl: "https://pngimg.com/uploads/scooter/scooter_PNG11329.png"},
        {cartId: 2, userId: 3, itemId: 99, itemName: "Medical Item AS", shortDescription: "perspiciatrror sit voluptatemque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 1, imageUrl: "https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png"},
        {cartId: 2, userId: 3, itemId: 46, itemName: "Stroller Ed", shortDescription: "perspiciatis sit voluptatem audantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 1, imageUrl: "https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png"}
    ]

    useEffect(() => {
        setCart(cartItems);
    }, [cart.length])

    useEffect(() => {
        console.log(selectedCartItems);
    }, [selectedCartItems])
    
    function proceedCartHandle(itemId) {
        if (selectedCartItems.includes(itemId)) {
            setSelectedCartItems(selectedCartItems.filter(oldItemId => oldItemId !== itemId));
        } else {
            setSelectedCartItems(oldArray => [...oldArray, itemId])
        }
    }

    return (
        <div>
            <Header/>
            <div style={{ marginLeft: "40px", marginRight: "40px" }}>
                <Row>
                    <Col sm={10}>
                        <h5 style={{ textAlign: "left", marginLeft: "50px"}}>My Cart</h5>
                        <div style={{ marginRight: "30px" }} className="line_break_small_with_shadow"></div>
                        <br></br>
                        {
                            cart.map((item, key) => {
                                return <div>
                                        <Row>
                                            <Col>
                                                <ItemBoxInCart cartItem={item} />
                                            </Col>
                                            <Col sm={1}>
                                                <Form.Check onClick={() =>
                                                    proceedCartHandle(item.itemId)
                                                }  aria-label="option 1" />
                                            </Col>
                                        </Row>
                                        <br></br>
                                        <div style={{ marginRight: "30px" }} className="line_break_small_with_shadow"></div>
                                        <br></br>
                                    </div>
                            })
                        }
                    </Col>
                    <Col style={{ textAlign: "left", fontWeight: "600" }} sm={2}>
                        <br></br>
                        <h7>Total Cart Items: 6</h7>
                        <br></br>
                        <h7>Total Sell Items: 3</h7>
                        <br></br>
                        <h7>Total Rent Items: 1</h7>
                        <br></br>
                        <h7>Total Sell and Rent Items: 2</h7>
                        <br></br>
                        <br></br>
                        <div id="checkout_box_for_item">
                            { selectedCartItems.map((itemId) => {
                                return <div style={{ padding: "12px 30px" }}>
                                    <Row>
                                        <Col sm={9}>
                                            {cart.find(item => item.itemId === itemId).itemName}
                                        </Col>
                                        <Col sm={1}>
                                            {cart.find(item => item.itemId === itemId).quantity}
                                        </Col>
                                    </Row> 
                                </div>
                            })}
                        </div>
                        <br></br>
                        <Row>
                            <Button id="go_to_checkout_button" variant="primary">All To Checkout</Button>
                        </Row>
                        <Row>
                            <Button id="more_items_button" variant="primary">More Items</Button>
                        </Row>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    {/* {
                        itemList.map((item, key) => {
                            return  <Col>
                                        <ItemBox itemName={item.itemName} rate={item.rate} shortDescription={item.shortDescription} imageUrl={item.imageUrl} key={key}/>
                                    </Col>
                        })
                    } */}
                </Row>
                <br></br>
            </div>
        </div>
    )

}

export default Cart;