import React from 'react';
import './SingleCard.css'

const SingleCard = (props) => {
    const {card} = props;
    const { category_id, brand_id, name, price , image, description,discount} = card;
    console.log(name)
    return (
        <div className='singleCart'>
            <div className='card'>
            <img className='img_style' src={image}></img>
            <h3> {name}</h3>
            <p className='description'>{description}</p>
            <p className='Discount'>Discount:{discount}</p>
            <h4>Taka:{price}</h4>
            </div>
            
            
        </div>
    );
};

export default SingleCard;