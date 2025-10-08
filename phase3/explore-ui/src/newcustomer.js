import { useState } from "react"
import { holders } from "./data"

export const NewCustomer = () => {

    const[customer,setCustomer] = useState({
        cardholder:"",
        cardbalance:0,
        cardtype:""
    })
    // collect text box value to hook
    const collectData = (event) =>{
        const{name,value} = event.target
        setCustomer((exists)=>{
            return{
                ...exists,
                [name]:value
            }
        })
    }
    // button click func
    const enroll = () => {
        console.log("enrolled")
        holders.push(customer)
        alert(`${customer.cardholder} added in bank records ${holders.length}`)
    }
    return(
        <>
            <div>
                <input onChange={collectData} name="cardholder" value={customer.cardholder} type="text" placeholder="cardholder"/>
                <input onChange={collectData} name="cardbalance" value={customer.cardbalance} type="text" placeholder="cardbalance"/>
                <input onChange={collectData} name="cardtype" value={customer.cardtype} type="text" placeholder="cardtype"/>
                <button onClick={enroll}>Save Customer</button>
            </div>
        </>
    )
}