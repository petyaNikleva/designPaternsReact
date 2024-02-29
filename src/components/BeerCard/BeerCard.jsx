import { useState } from "react";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import './BeerCard.css'
import openBeerSound from '/open-beer.mp3';

const BeerCard = ({ beer }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const { name, image_url, description } = beer;

    const onClickFavouriteHandler = () => {
        setIsFavourite((prevIsFavourite) => {
            const newIsFavourite = !prevIsFavourite;
                     return newIsFavourite;
        });
    };

    const playSound = () => {
        new Audio(openBeerSound).play();
    }

    const onImageClickHandler = () => {
        playSound();
    }

    return (
        <div className='card-container'>
            <img src={image_url} className='card-container--img' onClick={() => onImageClickHandler()} alt="beer-img" />
            {isFavourite
                ? <FaStar color="#54dbc2" className="star-icon" onClick={() => onClickFavouriteHandler()} />
                : <FaRegStar color="#54dbc2" className="star-icon" onClick={() => onClickFavouriteHandler()} />
            }
            <div className='card-container--info'>
                <h3> {name}</h3>
                <div className='card-container--description'>Description: {description}</div>
            </div>
        </div>
    )
}

export default BeerCard;
