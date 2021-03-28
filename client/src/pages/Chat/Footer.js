import React from 'react'
import { useMutation } from '@apollo/client';
import { AddMessage } from '../../graphql/mutations/AddMessage';


export default function Footer({ user }) {
    const [body, setBody] = React.useState('');
    const [sendMessage, { loading }] = useMutation(AddMessage, {
        variables: {
            username: user,
            body
        },

        onCompleted() {
            setBody('');
        }
    });

    const handleSubmit = () => {
        if (!body) return;
        sendMessage()
    }


    return (
        <div className="chat__footer">
            <div>
                <span>New Message</span>
                <div></div>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={body}
                    onChange={ev => setBody(ev.target.value)}
                    onKeyPress={ev => ev.key === 'Enter' ? handleSubmit() : null}
                />
                <button onClick={handleSubmit}>
                    {!loading ? 'SEND' : 'SENDING...'}
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    )
}
