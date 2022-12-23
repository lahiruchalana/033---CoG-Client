import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { PostNewCartORUpdateCart } from "../../requests/PostRequests";
import axios from "axios";
import { useGlobalState } from '../../global/UserGlobalData'


function ItemBoxInCart(props) {
    const postNewCartORUpdateCartURL = PostNewCartORUpdateCart();
    const [userId, setUserId] = useGlobalState('userId');
    const [isIncrement, setIsIncrement] = useState(false);
    const [isDecrement, setIsDecrement] = useState(false);
    const [valueChanging, setValueChanging] = useState(0);
    const [quantity, setQuantity] = useState(null)

    useEffect(() => {
        setQuantity(props.cartItemByUserId.quantity);
    }, [])

    useEffect(() => {
        console.log("(valueChanging for execute useEffect) - valueChanging: ", valueChanging);
        if (isIncrement === true) {
            setQuantity(quantity + 1);
            axios.post(postNewCartORUpdateCartURL, {
                shoppingCartActualCatalogItemClusterDTOS: [
                    {
                    catalogItemClusterId: props.cartItemByUserId.catalogItemClusterId,
                    quantity: quantity + 1,
                    sellOrRent: props.cartItemByUserId.sellOrRent
                    }
                ],
                userId: userId
                },).then((response) => {
                console.log("Response of Quantity Changing: ", response.data);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log("error.response.status", error.response.status);
                } else {
                    console.log("error.message", error.message);
                }
            })
        } else if (isDecrement === true) {
            setQuantity(quantity - 1);
            axios.post(postNewCartORUpdateCartURL, {
                shoppingCartActualCatalogItemClusterDTOS: [
                    {
                    catalogItemClusterId: props.cartItemByUserId.catalogItemClusterId,
                    quantity: quantity - 1,
                    sellOrRent: props.cartItemByUserId.sellOrRent
                    }
                ],
                userId: userId
                },).then((response) => {
                console.log("Response of Quantity Changing: ", response.data);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log("error.response.status", error.response.status);
                } else {
                    console.log("error.message", error.message);
                }
            })
        }

    }, [isIncrement, isDecrement, valueChanging])


    return(
        <div>
            <Row style={{ marginRight: "30px" }}>
                <Col sm={4}>
                    <img id="item_image_in_cart" src={props.cartItem.imageUrl}></img>
                </Col>
                <Col style={{ textAlign: "left" }} sm={4}>
                    <h4>{props.cartItem.itemName}<Button style={{ fontSize: "10px", fontWeight: "600", padding: "3px", marginLeft: "10px" }} variant="info">{props.cartItemByUserId.sellOrRent}</Button></h4>
                    <Rating 
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar color="gold"/>}
                        placeholderSymbol={<FaStar color="gold"/>}
                        placeholderRating={props.cartItem.rate}
                    />
                    <br></br>
                    <h6>{props.cartItem.shortDescription} <h6>{props.cartItemByUserId.catalogItemClusterId}</h6> <a href="/#">see the product</a></h6>
                </Col>
                <Col style={{ display: "block",  marginLeft: "auto", marginRight: "auto"}} sm={3}>
                    <Row>
                        <Col>
                            <Button id="increment_decrement_button" variant="outline-info" onClick={() => {
                                setIsDecrement(true);
                                setIsIncrement(false);
                                setValueChanging(valueChanging - 1);
                            }}>-</Button>
                        </Col>
                        <Col>
                            <h6 style={{ color: "green" }}>Quant: {quantity}</h6>
                        </Col>
                        <Col>
                            <Button id="increment_decrement_button" variant="outline-info" onClick={() => {
                                setIsIncrement(true);
                                setIsDecrement(false);
                                setValueChanging(valueChanging + 1);
                            }}>+</Button>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                </Col>
            </Row>
        </div>
    )
}

export default ItemBoxInCart;