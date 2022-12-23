import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import ItemBoxInCart from "../../components/item_box/ItemBoxInCart";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ItemBox from "../../components/item_box/ItemBox";
import { useGlobalState } from '../../global/UserGlobalData'
import { GetCartByUserId } from "../../requests/GetRequests";
import { MdDelete } from 'react-icons/md';
import axios from "axios";
import DeleteItemFromCart from "../../requests/DeleteRequests";



function Cart() {
    const [cart, setCart] = useState([])
    const [itemList, setItemList] = useState([]);
    const [selectedCartItems, setSelectedCartItems] = useState([])
    const [cartItemsByUserId, setCartItemsByUserId] = useState([])
    const [removingItemFromUserCart, setRemovingItemFromUserCart] = useState(null)
    const [deletingExecuted, setDeletingExecuted] = useState(false);

    const [cartItemTotal, setCartItemTotal] = useGlobalState('cartItemTotal');
    const [userId, setUserId] = useGlobalState('userId');

    const getCartByUserIdURL = GetCartByUserId();
    const deleteItemFromCartURL = DeleteItemFromCart();

    useEffect(() => {   
        axios.get(getCartByUserIdURL, {},).then((response) => {
            const data = response.data.data.shoppingCartActualCatalogItemClusterDTOS
            setCartItemsByUserId(data);
            console.log("Response: ", response)
            console.log("Response of Cart Item Data of User: ", cartItemsByUserId);
            setDeletingExecuted(false);
        })
        .catch(function (error) {
            if (error.response) {
                console.log("error.response.status", error.response.status);
            } else {
                console.log("error.message", error.message);
            }
        })


    }, [getCartByUserIdURL, cartItemsByUserId.length, deletingExecuted])

    useEffect(() => {
        axios.delete(`${deleteItemFromCartURL}?userId=${userId}&itemCatalogId=${removingItemFromUserCart}`, {},).then((response) => {
            console.log("Response for delete item from cart: ", response);
            setDeletingExecuted(true)
        })
        .catch(function (error) {
            if (error.response) {
                console.log("error.response.status", error.response.status);
            } else {
                console.log("error.message", error.message);
            }
        })


    }, [removingItemFromUserCart, userId])

    const cartItems = [
        {cartId: 2, userId: 3, itemId: 56, rentOrSell: "SELL", itemName: "Scooter Ed", rate: 4, shortDescription: "perspicim entore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 2, imageUrl: "https://pngimg.com/uploads/scooter/scooter_PNG11329.png"}, 
        {cartId: 2, userId: 3, itemId: 34, rentOrSell: "RENT AND SELL", itemName: "Wheel Chair", rate: 3, shortDescription: "perspiciquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 1, imageUrl: "https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png"},
        {cartId: 2, userId: 3, itemId: 6, rentOrSell: "RENT", itemName: "Party Item DF", rate: 5, shortDescription: "perspicimo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 3, imageUrl: "https://pngimg.com/uploads/scooter/scooter_PNG11285.png"},
        {cartId: 2, userId: 3, itemId: 8, rentOrSell: "SELL AND SELL", itemName: "Scooter Ed", rate: 3, shortDescription: "perspiciatae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 5, imageUrl: "https://pngimg.com/uploads/pram/pram_PNG101292.png"},
        {cartId: 2, userId: 3, itemId: 99, rentOrSell: "RENT", itemName: "Medical Item AS", rate: 2, shortDescription: "perspicue ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 1, imageUrl: "https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png"},
        {cartId: 2, userId: 3, itemId: 46, rentOrSell: "SELL", itemName: "Stroller Ed", rate: 5, shortDescription: "perspiciatisab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.....", quantity: 1, imageUrl: "https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png"}
    ]

    useEffect (() => {
        setItemList([
            {itemName: "Scooter EDS", rate: 5, shortDescription: "Lorem ipsum dolor sit amet, consectetur adore magna aliqua. U", imageUrl: "https://pngimg.com/uploads/scooter/scooter_PNG11285.png"}, 
            {itemName: "Slingshot DC", rate: 4, shortDescription: "Lorem illamco labor t ut labore et dolore labor", imageUrl: "https://pngimg.com/uploads/scooter/scooter_PNG11329.png"},
            {itemName: "Stroller ASC", rate: 3, shortDescription: "Sed do eiusmod tempor incididunt ut labore et dolore labor", imageUrl: "https://pngimg.com/uploads/pram/pram_PNG101292.png"},
            {itemName: "Moped DE", rate: 4, shortDescription: "Lorem ipsulore magna aliqua. Ut enim ad minim veniam, quis ", imageUrl: "https://pngimg.com/uploads/volleyball/volleyball_PNG23.png"},
            {itemName: "Moped UI", rate: 3, shortDescription: "Lorem ipsum dolor sitquis nostrud exercitation ullamco labor", imageUrl: "https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png"}
        ])
    })

    useEffect(() => {
        setCart(cartItems);
        setCartItemTotal(cartItemsByUserId.length)
    }, [cart.length, cartItemsByUserId.length])

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

    function removeItemFromUserCart(cartItemForDelete) {
        console.log("Deleted cart item: ", cartItemForDelete);
        console.log(cartItemForDelete.catalogItemClusterId);

        setRemovingItemFromUserCart(cartItemForDelete.catalogItemClusterId)
    }

    return (
        <div>
            <Header/>
            <div style={{ marginLeft: "40px", marginRight: "40px" }}>
                <Row> 
                    <Col sm={9}>
                        <h5 style={{ textAlign: "left", marginLeft: "50px"}}>My Cart</h5>
                        <div style={{ marginRight: "30px" }} className="line_break_small_with_shadow"></div>
                        <br></br>
                        {
                            cart.map((item, key) => {
                                return (key>cartItemsByUserId.length-1) ? null : 
                                <div>
                                        <Row>
                                            <Col>
                                                <ItemBoxInCart cartItem={item} cartItemByUserId={cartItemsByUserId[key]} />
                                            </Col>
                                            <Col sm={1}>
                                                <div style={{ boxShadow: "2px 1px 5px 1px #8f8d8d", width: "35px", borderRadius: "3px",   cursor: "pointer" }}>
                                                    <Form.Check 
                                                        onClick={() =>
                                                        proceedCartHandle(item.itemId)
                                                    }  aria-label="option 1" />
                                                </div>
                                                <div style={{ marginTop: "100px", marginRight: "12px" }}>
                                                    <MdDelete id="delet_button" onClick={() => {
                                                        removeItemFromUserCart(cartItemsByUserId[key]);
                                                    }} style={{ fontSize: "24px", padding: "1px" }} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <br></br>
                                        <div style={{ marginRight: "30px" }} className="line_break_small_with_shadow"></div>
                                        <br></br>
                                    </div>
                            })
                        }
                    </Col>
                    <Col style={{ textAlign: "left", fontWeight: "600" }} sm={3}>
                        <div id="all_checkout_container">
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
                        </div>
                        {
                            itemList.map((item, key) => {
                                return  (key===1) ? <Col style={{ marginTop: "40px" }}>
                                            <ItemBox itemName={item.itemName} rate={item.rate} shortDescription={item.shortDescription} imageUrl={item.imageUrl} key={key}/>
                                        </Col> : null
                            })
                        }
                    </Col>
                </Row>
                <h4>You Will Buy?</h4>
                <br></br>
                <Row>
                    {
                        itemList.map((item, key) => {
                            return  <Col>
                                        <ItemBox itemName={item.itemName} rate={item.rate} shortDescription={item.shortDescription} imageUrl={item.imageUrl} key={key}/>
                                    </Col>
                        })
                    }
                </Row>
                <br></br>
                <div style={{ marginRight: "30px" }} className="line_break_small_with_shadow"></div>
                <br></br>
            </div>
        </div>
    )

}

export default Cart;