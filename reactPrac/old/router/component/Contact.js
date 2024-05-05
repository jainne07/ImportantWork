import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import ContactDetails from './ContactDetails'

const contacts = [
    {
    id: 1,
    name: 'Carlos Santana',
    email: 'carlos.santana@js.education',
    phone: '415-307-3112'
    },
    {
    id: 2,
    name: 'John Smith',
    email: 'john.smith@js.education',
    phone: '223-344-5122'
    },
    {
    id: 3,
    name: 'Alexis Nelson',
    email: 'alexis.nelson@js.education',
    phone: '664-291-4477'
    }
    ]
   
export default function Contact() {
       const[contactDet, setContactDet]=useState(false)
        const renderContacts = () => (
        <ul>
        {contacts.map((contact) => (
        <li key={contact.id}>
        <Link to={`/contact/${contact.id}`} onClick={changeState}>{contact.name}</Link>
        </li>
        ))}
        </ul>
        )
        const changeState=()=>{
            setContactDet({
                contactDet: !contactDet
            })
        }
    return (
        <div className="Contacts">
        <h1 className="my-2">Contacts Name</h1>
        {/* We render our selectedContact or all the contacts */}
        {renderContacts()} 
        {contactDet && <ContactDetails list={contacts} />}


        
</div>
    )
}
