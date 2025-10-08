import { useEffect, useState } from 'react';
import './items.css';
import { holders } from './data';
export const Card = () => {
    const[tempHolders,setTempHolders] = useState([])
    const loadCardHolders = () =>{
        setTempHolders(holders)
    }
    useEffect(()=>{
        loadCardHolders()
    })
    return(
        <>
            <div id="row">
                {/* {tempHolders.length} */}
                {
                    tempHolders.map((obj)=>(
                        <div id="item">
                            <h1>Card Holder {obj.cardholder}</h1>
                            <h2>Available Balance {obj.cardbalance}</h2>
                            <h2>Card Type{obj.cardtype}</h2>
                        </div>                        
                    ))
                }
            </div>
        </>
    )
}