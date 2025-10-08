import { useEffect, useState } from "react"
import { read, remove } from "./base"
import { useNavigate } from "react-router-dom"

export const ViewContacts = () => {
    const[loaded,setLoaded] = useState([])
    const nav = useNavigate()
    const grid = {
        display: 'inline-block',
        margin: '5px',
        padding: '10px',
        border:'none',
        borderRadius:'20px',
        backgroundColor:'orange',
        color:'blue'
    }
    useEffect(()=>{
        setLoaded(read())
    },[])
    return(
        <>
            <div style={{display:'flex',justifyContent:'center'}}>
                {
                    loaded.map((obj)=>(
                        <div style={grid}>
                            <h1>{obj.contactName}</h1>
                            <h1>{obj.contactNumber}</h1>
                            <h1>{obj.contactEmail}</h1>
                            <button onClick={()=>{
                                remove(obj.contactNumber)
                                alert(`${obj.contactName} has been removed from list`)
                                nav("/")
                            }}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}