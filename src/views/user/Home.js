import React, { useState, useEffect } from "react";
import { GetCategories } from '../../requests/GetRequests'
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useGlobalState } from '../../global/UserGlobalData'
import logo from '../../assets/Logo.webp';
import LevelOneBox from "../../components/levelOneBox/LevelOneBox";
import { FaBeer } from 'react-icons/fa';

function Home() {
    const [categoryArray, setCategoryArray] = useState([]);
    const [clickedCategoryName, setClickedCategoryName] = useState(null);
    const [showDropDown, setShowDropDown] = useState(false);
    const [expandKey, setExpandKey] = useState(null);
    const [isNullChildren, setIsNullChildren] = useState(false); 
    const [categoryList, setCategoryList] = useGlobalState('categoryList');
    const [itemId, setItemId] = useGlobalState('itemId');
    const getCategoryURL = GetCategories();

    useEffect(() => {   
        axios.get(getCategoryURL, {},).then((response) => {
            var categoryData = eval('(' + (response.data.data) + ')');
            setCategoryArray(categoryData);
            setCategoryList(categoryData);
            console.log("Response: ", categoryData);
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


    }, [getCategoryURL, categoryArray.length])

    useEffect(() => {
        console.log("clickedCategoryName", clickedCategoryName);
        console.log("isNullChildren", isNullChildren)
    }, [clickedCategoryName, isNullChildren])


    return(
        <div>

            {/* ----------- Starts, Item boxes ----------- */}

            <Row>
                <Col sm={1}>
                    <div id="title_home_one_bar"></div>
                </Col>
                <Col sm={6} id="title_home_one">
                    <h4>Wheelchair, stroller, scooter rentals & more</h4>
                </Col>
            </Row>
            <br></br>
                
            <Row id="item_level_one_collection_row">
                <Col id="item_box_container">
                    <LevelOneBox title="Hot rentals" itemArray='{ "itemId": [1,3,4,5], "imageURL": ["https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png", "https://pngimg.com/uploads/volleyball/volleyball_PNG23.png", "https://pngimg.com/uploads/scooter/scooter_PNG11329.png", "https://pngimg.com/uploads/pram/pram_PNG101292.png"]}'/>
                </Col>
                <Col id="item_box_container">
                    <LevelOneBox title="Most searched rentals" itemArray='{ "itemId": [1,3,4,5], "imageURL": ["https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png", "https://pngimg.com/uploads/volleyball/volleyball_PNG23.png", "https://pngimg.com/uploads/scooter/scooter_PNG11329.png", "https://pngimg.com/uploads/pram/pram_PNG101292.png"]}'/>
                </Col>
                <Col id="item_box_container">
                    <LevelOneBox title="New rentals" itemArray='{ "itemId": [1,3,4,5], "imageURL": ["https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png", "https://pngimg.com/uploads/volleyball/volleyball_PNG23.png", "https://pngimg.com/uploads/scooter/scooter_PNG11329.png", "https://pngimg.com/uploads/pram/pram_PNG101292.png"]}'/>
                </Col>
                <Col id="item_box_container">
                    <LevelOneBox title="Rental categories" itemArray='{ "itemId": [1,3,4,5], "imageURL": ["https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png", "https://pngimg.com/uploads/volleyball/volleyball_PNG23.png", "https://pngimg.com/uploads/scooter/scooter_PNG11329.png", "https://pngimg.com/uploads/pram/pram_PNG101292.png"]}'/>
                </Col>
            </Row>

            {/* ----------- Ends, Item boxes ----------- */}

            <br></br>
            <h1></h1>
        </div>
    )
}

export default Home;