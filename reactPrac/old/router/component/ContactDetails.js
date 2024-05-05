import React from 'react'
import { useParams } from 'react-router-dom';


export default function ContactDetails(props) {
   const params=useParams()
    const contactDet= props.list.find(contact => contact.id === Number(params.contactId))
   //console.log(props.list);
   //console.log(contactDet);
    return (
        <>
        <div key={contactDet.id} className="m-2 border-top p-2">
        <h1 className="text-capitalize mb-2">{contactDet.name}</h1>
        <h3 className="text-primary">{contactDet.phone}</h3>
        <p>{contactDet.email}</p>
        </div>  
        </>
    )
}
