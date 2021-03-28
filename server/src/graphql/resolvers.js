const messages = [];
const CHANNEL = 'CHANNEL';

const resolvers = {
    Query: {
        messages: () => messages
    },
    Mutation: {
        addMessage: (_, { body, username }, { pubsub }) => {
            messages.push({ id: messages.length + 1, body, username });
            pubsub.publish(CHANNEL, { messageSent: messages[messages.length - 1] });
            return messages[messages.length - 1];
        }
    },
    Subscription: {
        messageSent: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(CHANNEL)
        }
    }
}

module.exports = resolvers;