const {gql, ApolloServer} = require('apollo-server');

const typeDefs = gql`
    type Query{
        idade: Int
        salario: Float
        nome: String
        sexo: String
        activo: Boolean
        id: ID
        cursos: [String]! #este ponto de esclamacao, vai evitar que mostremos o valor null nosso playground


    }
`;

const resolvers = {
    Query: {
        idade(){
            return 28;
        },
        salario(){
            return 10000.000
        },
        nome(){
            return "Macedo Paulo"
        },
        sexo(){
            return "Masculino"
        },
        id(){
            return 12234343
        },
        cursos(){
            return ['Graphql','React', 'PHP','JavaScript']
        }

    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()