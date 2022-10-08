import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import './Card.css'

const Card = () => {
    const [cards , setCards] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className='cardContainer'>
            {
                cards.map(card=><SingleCard
                card={card}
                key={card.id}>

                </SingleCard>)
            }
        </div>
    );
};

export default Card;