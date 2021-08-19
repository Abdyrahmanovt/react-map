import React from "react";
import './index.css'

const Rating = (props)=>{
    return (
        <div className='rating'>
            <i className={`fas fa-star ${props.rating > 0 && 'orange-star'}`} />
            <i className={`fas fa-star ${props.rating > 1 && 'orange-star'}`} />
            <i className={`fas fa-star ${props.rating > 2 && 'orange-star'}`} />
            <i className={`fas fa-star ${props.rating > 3 && 'orange-star'}`} />
            <i className={`fas fa-star ${props.rating > 4 && 'orange-star'}`} />

        </div>
    )
}
export default Rating
