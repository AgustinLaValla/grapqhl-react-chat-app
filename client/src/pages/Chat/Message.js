import React from 'react'

export default function Message({ message, user }) {
    const isSender = message.username === user;
    return (
        <div className={`chat__message ${isSender ? 'right': 'left'}`}>
            <div>{message.username.slice(0, 2)}</div>
            <div className={`${isSender ? 'senderBubble' : 'receiverBubble'}`}>
                {message.body}
            </div>
        </div>
    )
}
