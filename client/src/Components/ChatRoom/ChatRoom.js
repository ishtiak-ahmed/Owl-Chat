import React from 'react';
import MessageItem from './MessageItem';
import SendMessage from './SendMessage';

const ChatRoom = () => {
    const consersationID = 'demo';
    return (
        <div className="chatroom">
            <h2>John Doe</h2>
            <div className="messages">
                <MessageItem type="recieved" message="Hello World"/>
                <MessageItem type="recieved" />
                <MessageItem type="sent" />
                <MessageItem type="sent" />
                <MessageItem type="recieved" />
                <MessageItem type="recieved" />
                <MessageItem type="sent" />
                <MessageItem type="recieved" />
            </div>
            <SendMessage consersationID={consersationID}/>
        </div>
    );
};

export default ChatRoom;