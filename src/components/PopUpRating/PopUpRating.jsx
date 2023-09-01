import React, {useState} from 'react';
import { Rating } from 'react-simple-star-rating'
// import ConfettiExplosion from 'react-confetti-explosion';
import 'reactjs-popup/dist/index.css';
import './PopUpRating.module.css';

export const PopUpRating = ({popUpStartMessage, popUpEndMessage}) => {

    let userRate;
    
    const [, setRating] = useState(0)
    const [message, setMessage] = useState(false);

    const changeMessage = () => {
        setMessage(true)
    }

    const handleRating = (rate) => {
        userRate = rate;
        setRating(rate)
        changeMessage()
    }

    return (
        <div>
            <h1>{popUpStartMessage}</h1>
            <h1>
                <Rating onClick={handleRating}/>
                {message 
                ? 
                <>
                <h3 style={{color:'green'}}>{popUpEndMessage} 😊</h3>
                {/* <ConfettiExplosion/> */}
                </>
                : 
                null}
            </h1>
           
        </div>
    )
}

export default PopUpRating;