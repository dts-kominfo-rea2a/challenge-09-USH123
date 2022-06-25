// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css'

const Contact = (props) => {
    return (
        <>
        <div className='content-grid' style={{ }}>
            <div className='left-section'>
                <img src={props.contact.photo} className = "profile-picture" ></img>
            </div>
            <div className = "right-section" style={{  }}>
                <p>{props.contact.name}</p>
                <p>{props.contact.phone}</p>
                <p>{props.contact.email}</p>
            </div>
        </div>
        </>
    )
}

export default Contact;