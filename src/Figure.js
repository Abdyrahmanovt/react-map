import React, {useState} from "react";



const Figure =()=>{
    const [forma, setForma] = useState('квадрат')
    const circle = ()=>{
        setForma( 'круг')
    }
    const square = ()=>{
        setForma( 'квадрат')
    }
    return (
        <div>
            <button onClick={circle}>Circle</button>
            <p>{forma}</p>
            <button onClick={square}>Square</button>
        </div>
    )
}
export default Figure