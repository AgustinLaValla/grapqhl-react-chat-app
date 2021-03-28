import gql from "graphql-tag";

export const MessageSent = gql`
    subscription MessageSent {
        messageSent {
            id
            username
            body
        }
    }
`;