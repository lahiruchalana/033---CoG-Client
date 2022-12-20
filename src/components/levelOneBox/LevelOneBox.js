import React, { useState, useEffect } from "react"
import { GetItems } from '../../requests/GetRequests'
import axios from "axios";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MobilityScooter from '../../assets/MobilityScooter.png'
import HospitalBed from '../../assets/HospitalBed.png'
import { useGlobalState } from '../../global/UserGlobalData'
import { useNavigate } from "react-router-dom";

function LevelOneBox(props) {
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useGlobalState('itemId');
    const getItemURL = GetItems();
    const itemArray = JSON.parse(props.itemArray);
    const navigate = useNavigate();

    useEffect(() => {   
        axios.get(getItemURL, {},).then((response) => {
            setItems(response.data.data);
            console.log("Items: ", response.data.data);
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

    }, [getItemURL, items.length])

    useEffect(() => {   
        console.log("itemArray: ", itemArray.itemId);

    }, [itemArray])

    useEffect(() => {
        console.log("itemId: ", itemId);
    }, [itemId])

    return(
        <div>
            <Container>
                <h5>{props.title}</h5>
                <Row>
                    { itemArray.itemId.map((id, key) => {
                        if (key===0||key===1) {
                            return <Col id="item_box_one" onClick={() => {
                                setItemId(id);
                                navigate("/items");
                            }}>
                                <img className="box_first_image" src={itemArray.imageURL[key]} alt="ImageOfItems"/>
                            </Col>
                        }
                    })}
                </Row>
                <Row>
                    { itemArray.itemId.map((id, key) => {
                        if (key===2||key===3) {
                            return <Col id="item_box_one" onClick={() => {
                                    setItemId(id);
                                    navigate("/items");
                                }}>
                                <img className="box_first_image" src={itemArray.imageURL[key]} alt="ImageOfItems" />
                            </Col>
                        }
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default LevelOneBox;