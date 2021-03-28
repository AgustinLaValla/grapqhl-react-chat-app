import React from 'react'
import { useQuery } from '@apollo/client';
import { GetMessages } from '../../graphql/queries/GetMessage';
import { MessageSent } from '../../graphql/subscriptions/MessageSent';
import Message from './Message';

export default function Messages({ user }) {
    const { subscribeToMore, data, loading, error } = useQuery(GetMessages);
    const ref = React.useRef();

    const subscribeToMoreMessages = () => {
        subscribeToMore({
            document: MessageSent,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newMessage = subscriptionData.data.messageSent;
                return Object.assign({}, prev, {
                    messages: [newMessage, ...prev.messages]
                })
            }
        })
    }

    console.log({ data, loading, error });

    React.useEffect(() => {
        subscribeToMoreMessages();
    }, []);

    React.useEffect(() => {
        if (data?.messages?.length) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [data]);

    return (
        <div className={`chat__messages ${(!loading && !data.messages.length) || loading ? 'column' : 'reverse'}`}
            ref={ref}>
            {
                !loading && !data.messages.length &&
                <div className="chat__alert">There are no messages</div>
            }
            {
                loading && <div className="chat__loading">Loading...</div>
            }
            {
                !loading &&
                data.messages.length > 0 &&
                data.messages.map(message =>
                    <Message key={message.id} message={message} user={user} />
                )
            }
        </div>
    )
}
