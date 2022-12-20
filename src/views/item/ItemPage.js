import React, { useState, useEffect } from "react";
import { useGlobalState } from '../../global/UserGlobalData'
import { GetItemById } from '../../requests/GetRequests'
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Rating from 'react-rating';

import { FaRegStar, FaStar } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import ItemBox from "../../components/item_box/ItemBox";


function ItemPage() {
    const [itemList, setItemList] = useState([]);
    const [itemId, setItemId] = useGlobalState('itemId');
    const [item, setItem] = useState({});

    const navigator = useNavigate();

    useEffect (() => {
        setItemList([
            {itemName: "Abdcs", rate: 5, shortDescription: "Lorem ipsum dolor sit amet, consectetur adore magna aliqua. U", imageUrl: ""}, 
            {itemName: "Bscsh", rate: 4, shortDescription: "Lorem illamco labor t ut labore et dolore labor", imageUrl: ""},
            {itemName: "Zjbfy", rate: 3, shortDescription: "Sed do eiusmod tempor incididunt ut labore et dolore labor", imageUrl: ""},
            {itemName: "Khdg", rate: 4, shortDescription: "Lorem ipsulore magna aliqua. Ut enim ad minim veniam, quis ", imageUrl: "https://pngimg.com/uploads/scooter/scooter_PNG11285.png"},
            {itemName: "Ghtgvc", rate: 2, shortDescription: "Lorem ipsum dolor sitquis nostrud exercitation ullamco labor", imageUrl: ""}
        ])
    })

    const getItemByIdURL = GetItemById();

    useEffect(() => {   
        axios.get(getItemByIdURL).then((response) => {
            setItem(response.data.data);
            console.log("Response: ", response.data.data);
            console.log("item: ", item);
            console.log("itemId: ", itemId)
        })
        .catch(function (error) {
            if (error.response) {
                console.log("error.response.data", error.response.data);
                console.log("error.response.status", error.response.status);
            } else if (error.request) {
                console.log("error.request", error.request);
            } else {
                console.log("error.message", error.message);
            }
        })


    }, [itemId, item.id])

    if (itemId===null) {
        navigator("/")
    }

    return (
        <div className="page_container">
            <br></br>
            <Row>
                <Col sm={4}>
                    <div className="image_container">
                        <img className="item_image_of_item_page" src="https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png" alt="ImageOfItems"/>
                    </div>
                </Col>
                <Col >
                    <div className="top_box_in_item">
                        <h2>{item.itemName}</h2>
                        <h5>{item.description}</h5>                                      
                        <div className="display_inline">
                            <Rating 
                                emptySymbol={<FaRegStar />}
                                fullSymbol={<FaStar color="gold"/>}
                                placeholderSymbol={<FaStar color="gold"/>}
                                placeholderRating={3}
                            />
                            <h6 className="green_text_small">58 Ratings  |  12 Answers</h6>
                            {/* <h6> | </h6>
                            <h6>58 Ratings</h6> */}
                        </div>
                        <div className="line_break_small"></div>
                        <br></br>
                        <div className="display_inline_no_space">  
                            <TiTick color="green"/>
                            <TiTick color="green"/>
                            <h6>Holds persons up to 350 lbs (136 kg)</h6>
                        </div>
                        <div className="display_inline_no_space">  
                            <TiTick color="green"/>
                            <TiTick color="green"/>
                            <h6>Top speed of 4 mph</h6>
                        </div>
                        <div className="display_inline_no_space">  
                            <TiTick color="green"/>
                            <TiTick color="green"/>
                            <h6>Up to 10-12 mile cruising range</h6>
                        </div>
                        <div className="display_inline_no_space">  
                            <TiTick color="green"/>
                            <TiTick color="green"/>
                            <h6>Completely transportable</h6>
                        </div>
                        <div className="display_inline_no_space">  
                            <TiTick color="green"/>
                            <TiTick color="green"/>
                            <h6>Charger included with rental</h6>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="line_break_small"></div>
                        <br></br>
                        <Button id="book_now" variant="primary">Book Now</Button>
                        <Button id="add_to_cart" variant="warning">Add To Cart</Button>
                        <Button id="Estimate_Cost" variant="outline-primary">Estimate Cost</Button>
                        <br></br>
                        <br></br>
                        <h5>Not what you are looking for?</h5>
                        <h6 className="orange_text_small">See other products...</h6>
                        <br></br>              
                        <br></br>              
                        <div className="line_break_small"></div>
                    </div>      
                </Col>
            </Row>
            <div id="text_left_contained">
                <br></br>
                <h3>Description</h3>
                <h5>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h5>
                <br></br>
            </div>
            <div id="text_left_contained">
                <h3>Delivery and pickup: How it works</h3>
                <h5>"Lorem ipsum dolor sit amet, conostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h5>
                <br></br>
            </div>
            <div id="text_left_contained">
                <h3>Customer questions & answers</h3>
                <h5>Lorem ipsum doloragnae st laborum?</h5>
                <h5>Lorem ipsumborum?</h5>
            </div>

            <br></br>
            <div className="line_break_small"></div>
            <br></br>

            <h2>Similar Products</h2>
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
        </div>
    )

}

export default ItemPage;