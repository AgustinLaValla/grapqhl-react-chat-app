const typeDefs = `
    type Message {
        id: Int!
        body: String!
        username: String!
    }

    type Query {
        messages: [Message]
    }

    type Mutation {
        addMessage(body: String!, username: String!): Message!
    }

    type Subscription {
        messageSent: Message
    }
`;

module.exports = typeDefs;