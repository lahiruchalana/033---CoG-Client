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
import { MdShoppingCart } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

function Header() {

    const [categoryArray, setCategoryArray] = useState([]);
    const [clickedCategoryName, setClickedCategoryName] = useState(null);
    const [showDropDown, setShowDropDown] = useState(false);
    const [expandKey, setExpandKey] = useState(null);
    const [isNullChildren, setIsNullChildren] = useState(false); 
    const [categoryList, setCategoryList] = useGlobalState('categoryList');
    const [cartItemTotal, setCartItemTotal] = useGlobalState('cartItemTotal');
    const [userId, setUserId] = useGlobalState('userId');
    const getCategoryURL = GetCategories();
    const navigate = useNavigate();

    useEffect(() => {   
        axios.get(getCategoryURL, {},).then((response) => {
            var categoryData = eval('(' + (response.data.data) + ')');
            setCategoryArray(categoryData);
            setCategoryList(categoryData);
            console.log("Response of Categories: ", categoryData);
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
        setUserId(5); // should set userId using the ACCESS_TOKEN 
        console.log("userId: ", userId)
    }, [userId])

    useEffect(() => {
        console.log("clickedCategoryName", clickedCategoryName);
        console.log("isNullChildren", isNullChildren)
    }, [clickedCategoryName, isNullChildren])



    return (
        <div>
            {/* ----------- Starts, Main header for logo and login ----------- */}

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <a href="/">
                        <img className="logo_image" src={logo} alt="Logo" />
                    </a>
                    <Row >
                        <Col>
                            <a href="/cart" >
                                <MdShoppingCart id="cart_icon" color="white" /> 
                            </a>
                        </Col>
                        <Col>
                            <h1 style={{ color: "white", fontSize: "14px", backgroundColor: "red", padding: "5px", borderRadius: "20px" }}>{cartItemTotal}</h1>
                        </Col>
                        <Col id="signup_button">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px', width: "90px" }}
                                navbarScroll
                            >
                                <Nav.Link style={{ fontSize: '16px', color: "white" }} href="/user_registration">Sign up</Nav.Link>
                            </Nav>  
                        </Col>
                        <Col id="login_button">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px', width: "90px" }}
                                navbarScroll
                            >
                                <Nav.Link style={{ fontSize: '16px', color: "white" }} href="/login">Log in</Nav.Link>                            
                            </Nav>  
                        </Col>
                    </Row>
                </Container>
            </Navbar>

            {/* ----------- Ends, Main header for logo and login ----------- */}

            {/* ----------- Starts, User behavior related Item header ----------- */}

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', color: "white" }}
                        navbarScroll
                    >
                        <Nav.Link id="user_behivor_categories" href="#action1">Scooter</Nav.Link>
                        <Nav.Link id="user_behivor_categories" href="#action2">WheelChair</Nav.Link>
                        <Nav.Link id="user_behivor_categories" href="#action2">Mopeds</Nav.Link>
                        <Nav.Link id="user_behivor_categories" href="#action2">Strollers</Nav.Link>
                        <Nav.Link id="user_behivor_categories" href="#action2">{`More>>`}</Nav.Link>
                    </Nav>  
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>              
                </Container>
            </Navbar>


            {/* ----------- Ends, User behavior related Item header ----------- */}

            <div className="line_breaker"></div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Nav
                        id="category_name_bar"
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '65px' }}
                        navbarScroll
                    >
                            <Nav.Link id="rent_anything_text">Rent anything</Nav.Link>
                    </Nav>                
                </Container>
            </Navbar>

            <div id="belove_of_rent_anything_text">From the largest equipment rental marketplace on the planet</div>


            {/* ----------- Starts, Category header ----------- */}

            <div id="category_nav_margin_top"></div>
            <div id="category_nav_margin"></div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        id="category_name_bar"
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        { categoryArray.map((category, key) => {
                            return isNullChildren ? <Button id="catgory_button_for_null_children" variant="outline-secondary"
                                key={key} onMouseEnter={() => {
                                    if (category.children.length===0) {
                                        setIsNullChildren(true);
                                    }
                                    if (category.children.length!==0) {
                                        setIsNullChildren(false);
                                    } ;
                                }}>
                                {category.categoryName}
                                </Button> :
                             <Dropdown key={key} onMouseEnter={() => {
                                setShowDropDown(true);
                                setExpandKey(key);
                                if (category.children.length===0) {
                                    setIsNullChildren(true);
                                }
                                if (category.children.length!==0) {
                                    setIsNullChildren(false);
                                } ;
                                }} onMouseLeave={() => {setShowDropDown(false)}} show={expandKey===key&&showDropDown&&!isNullChildren}>
                                <Dropdown.Toggle
                                    className="dropdown_button" 
                                    id="dropdown-button-dark-example1" 
                                    variant="outline-secondary" 
                                    onMouseEnter={(event) => {
                                        setClickedCategoryName(event.currentTarget.textContent);
                                }}> 
                                {category.categoryName}
                                </Dropdown.Toggle>
                                <Dropdown.Divider />
                                <Dropdown.Menu variant="dark">
                                    {   category.children.map(levelOneSubCategory => {
                                        return <div>
                                            <Dropdown.Item id="level_one_sub_category" href="#">{levelOneSubCategory.categoryName}</Dropdown.Item>
                                            {   levelOneSubCategory.children.map(levelTwoSubCategory => {
                                                return <div>
                                                    <Dropdown.Item id="level_two_sub_category" href="#">{`---${levelTwoSubCategory.categoryName}`}</Dropdown.Item>
                                                    {   levelTwoSubCategory.children.map(levelthreeSubCategory => {
                                                        return <Dropdown.Item id="level_three_sub_category" href="#">{`------${levelthreeSubCategory.categoryName}`}</Dropdown.Item>
                                                    })
                                                    }
                                                    </div>
                                            })
                                            }
                                            </div>
                                        
                                    })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        })}
                    </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <br></br>

            {/* ----------- Ends, Category header ----------- */}
        </div>
    )

}

export default Header;