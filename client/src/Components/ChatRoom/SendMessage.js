import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

const SendMessage = ({consersationID}) => {
    const [user] = useContext(UserContext);
    const [message, setMessage] = useState('')
    const handleSend = () => {
        if(message){
            console.log(message, consersationID, user.id)
            setMessage('')
        }
    }
    return (
        <div className="newmessage">
            <input defaultValue='' type="text" onChange={(e)=> setMessage(e.target.value)}></input>
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default SendMessage;