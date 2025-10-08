// temporary storage
let tempContact = []

// load existing contact in tempContact from local storage
const loadContacts = () =>{
    tempContact = JSON.parse(localStorage.getItem("contacts")) || []
}

// write tempContact into localStorage
const dumpContacts = () =>{
    const converted = JSON.stringify(tempContact)
    localStorage.setItem("contacts",converted)
}

// Create new Contact
export const save = (object) => {
    loadContacts()
    tempContact.push(object)
    dumpContacts()
}

export const read = () =>{
    loadContacts()
    return tempContact
}

export const remove = (num) => {
    loadContacts()
    tempContact = tempContact.filter(obj=>obj.contactNumber!==num)
    dumpContacts()
}