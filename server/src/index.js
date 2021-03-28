const { GraphQLServer, PubSub } = require('graphql-yoga');
const { magenta } = require('colors');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const port = process.env.PORT || 4000;

async function main() {
    const pubsub = new PubSub();
    const server = new GraphQLServer({
        typeDefs,
        resolvers,
        context: { pubsub }
    });

    await server.start({ port });
    console.log(magenta(`Server on port: ${port}`));
}

main();