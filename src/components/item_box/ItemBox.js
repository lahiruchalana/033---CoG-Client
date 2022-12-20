import React from "react";
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

function ItemBox(props) {

    return(
        <div id="box_container">
            <div id="image_box_in_item_box">
                <img className="image_in_item_box" src="https://pngimg.com/uploads/wheelchair/wheelchair_PNG82825.png" alt="ImageOfItems"/>
                <h4>{props.itemName}</h4>
                <h6>{props.shortDescription}</h6>
                <Rating 
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<FaStar color="gold"/>}
                    placeholderSymbol={<FaStar color="gold"/>}
                    placeholderRating={props.rate}
                />
            </div>
        </div>
    )
}

export default ItemBox;