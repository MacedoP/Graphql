const {gql, ApolloServer } = require('apollo-server');
const { validateSDL } = require('graphql/validation/validate');
const nodemon = require('nodemon');

const produtos = [
    {
        id: 1,
        nome: 'Carro',
        valor: 122323.3
    },
    {
        id: 2,
        nome: 'Tv',
        valor: 2000.23

    }

]

const Usuarios= [
    {
        idade: 44,
        nome: 'Lurdes',
        peso: 75.4,
        altura: 1.65,
        identidade: 1
    },
    {
        idade: 55,
        nome: 'Miguel',
        peso: 78.4,
        altura: 1.75,
        identidade: 2
    }
]
const typeDefs = gql`

    type Usuario{
        idade: Int
        nome: String
        peso: Float
        altura: Float
        id: ID
    }

    type Produto{
        id: ID
        nome: String
        valor: Float
    }


    type Query{
        Usuarios: [Usuario]
        produtos: [Produto]
        usuario(id: Int): Usuario 
    }
`
const resolvers = {
    Query: {
        Usuarios(){
        return Usuarios;
       },
       usuario(_, args){
        // console.log(args);
            return Usuarios.find(usuario => usuario.id === args.id)
       },
       produtos(){
        return produtos;
            
       }

    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen();