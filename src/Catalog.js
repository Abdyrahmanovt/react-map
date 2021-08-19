import React, {useState} from "react";
import dishes from "./dishes";
import './index.css'
import Rating from "./Rating";

const Catalog = () => {
    const [catalog, setCatalog] = useState(dishes)
    return (
        <div className='container menu'>
            <h2 className='menu-title'>Menu</h2>
            <h2 className='menu-subtitle'>Food Full of treaty Love</h2>
            <p className='menu-desc'>There are many things are needed to start the Fast Food Business. You need not only
                Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
            <div className='row box-dishes'>
                {
                    catalog.map(el =>
                        <div className='col-4' key={el.id}>
                            <div className='box-food'>
                                <img src={el.images} alt="" className='food-img'/>
                                <div className='box-info'>
                                    <div className='box--price-info'>
                                        <h2 className='title'>{el.title}</h2>
                                        <h2 className='price'> {el.price}</h2>
                                    </div>
                                    <p className='desc'>Description: {el.description}</p>
                                    <Rating rating={el.rating}/>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Catalog