const { default: gql } = require("graphql-tag");

export const GetMessages = gql`
    query Messages {
        messages {
            id
            body
            username
        }
    }
`;