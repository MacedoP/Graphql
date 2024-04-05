//Nesta aula vamos ver os tipos scalares do graphql
const {gql, ApolloServer} = require("apollo-server");

const typeDefs = gql``

//O codigo abaixa representa uma class em JavaScript
const resolvers = {}


const server = new ApolloServer({//instancia
    typeDefs,
    resolvers
})

server.listen()