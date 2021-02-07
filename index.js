const { GraphQLServer } = require('graphql-yoga');
const fetch = require('node-fetch');

const baseURL = 'https://api.thecatapi.com'

const resolvers = {
    Query: {
        breeds: () => {
            return fetch(`${baseURL}/v1/breeds`).then(res =>res.json())
        }
    },
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers
});

// server.start(() =>console.log('Server is running on http://localhost:4000') )
server.start({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
