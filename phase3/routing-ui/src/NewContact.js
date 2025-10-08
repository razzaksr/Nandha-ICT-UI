import { useState } from "react"
import { save } from "./base"

export const NewContact = () => {
    const[contact,setContact]=useState({
        contactName:"",
        contactNumber:0,
        contactEmail:""
    })

    // get onchange values from text box
    const gather = (eve) =>{
        const{name,value} = eve.target
        setContact((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const handleSave = () =>{
        console.log(`new contact ${contact.contactName} to be saved`)
        save(contact)
        alert(`${contact.contactName} has been saved`)
    }

    return(
        <>
            <div>
                <input type="text" onChange={gather} value={contact.contactName} name="contactName" placeholder="contact name" />
                <input type="tel" onChange={gather} value={contact.contactNumber} name="contactNumber" placeholder="contact number" />
                <input type="email" onChange={gather} value={contact.contactEmail} name="contactEmail" placeholder="contact email" />
                <button onClick={handleSave}>Save Contact</button>
            </div>
        </>
    )
}