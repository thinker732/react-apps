import React from 'react';
import './Card.css'

const Card=(props)=>{
    return (
        <div className='tc bg-light-green dib br3 a3 ma2 grow shadow-5'>
            <img src={`https://robohash.org/${props.id}?200x200`} alt='robot'></img>
            <div>
               <h2>{props.name}</h2>
               <p>{props.email}</p> 
            </div>
        </div>
    );

}


export default Card;