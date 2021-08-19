import React, {useState} from 'react';
import users from "./users";
import './index.css'

const Contacts = () => {
    const [contacts, setContacts] = useState(users)
    return (
        <div>
<div className='users__box'>
<div className='row'>
    {
        contacts.map(item =>
        <div className='col-4' key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.username}</h2>
            <p>{item.email}</p>
            <p>{}</p>
        </div>
        )
    }
</div>
</div>
        </div>
    );
};

export default Contacts;