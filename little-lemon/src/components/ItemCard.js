import React from 'react';
import "../Styles/ItemCard.css";
import img1 from "../icons_assets/greek salad.jpg";

function ItemCard(props) {

    return(
        <div className="item-card">
            <div className="itemCard-container">
            
                <img className='cards_item_img' alt='Food Image'
                        src={props.data.imgsrc} />
                

                <div className="item-card-header">
                    <span>{props.data.title}</span>
                    <span>{props.data.price}</span>
                </div>
                    
                <div className='cards_item_info'>
                    <h5 className='cards_item_text'>{props.data.description}</h5>
                </div>
                <div className='itemcard-footer'>
                    <h5>Order a Delivery</h5>
                </div>
            </div>
        </div>
    ); 
}

export default ItemCard;