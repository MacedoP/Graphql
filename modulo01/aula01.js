const {gql, ApolloServer} = require("apollo-server");

const resolvers = {
    Query:{
        hello(){
            return "World";
        }
    }

}
const typeDefs = gql `
    type Quety{
        hello: String
    }

`
const server = new ApolloServer({
    typeDefs,
    resolvers

})

server.listen()