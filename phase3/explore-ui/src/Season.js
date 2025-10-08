import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const Season = () => {
    const[climate,setClimate] = useState("")
    const{month}=useParams()
    const traverse = useNavigate()
    useEffect(()=>{
        if(month==="aadi")
            setClimate("grey")
        else if(month==="ippasi")
            setClimate("blue")
        else if(month==="margali")
            setClimate("lightblue")
        else
            setClimate("orange")
    })
    const handleClick = () =>{
        traverse("/pharma")
    }
    return(
        <>
            <div style={{height:'100vh', backgroundColor:climate}}>
                <h1>{month}</h1>
                <button onClick={handleClick}> Move around </button>
            </div>
        </>
    )
}