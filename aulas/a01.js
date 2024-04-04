const {gql, ApolloServer} = require("apollo-server");

const resolvers = {
    Query:{
        hello(){
            return 'Estou começando a aprender Graphql';
        }
    }

}
const typeDefs = gql `
    type Query{
        hello: String
    }

`
const server = new ApolloServer({
    typeDefs,
    resolvers

});

server.listen()