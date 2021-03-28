import gql from "graphql-tag";

export const AddMessage = gql`
    mutation AddMessage($body: String!, $username: String!) {
        addMessage(body: $body, username: $username) {
            id
            body
            username
        }
    }
`;