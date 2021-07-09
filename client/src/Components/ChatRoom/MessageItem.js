import React from 'react';

const MessageItem = (props) => {
    return (
        <div className={props.type + '-message'}>
            <p>
            {
                props.message?.length ? props.message : 
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta mollitia facilis alias deserunt praesentium officiis labore asperiores expedita nam!`
            }
            </p>
        </div>
    );
};

export default MessageItem;