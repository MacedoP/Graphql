//Nesta aula vamos ver os tipos scalares do graphql
const {gql, ApolloServer} = require("apollo-server");


//Definicao dos atributos
const typeDefs = gql`
    type Query{
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }

`;

//O codigo abaixa representa uma class em JavaScript, é aqui onde atribuinos valores aos tipos definidos no typeDefs, em outras palavras aos nosso metodos
const resolvers = {
    Query:{
        idade(){
            return 18;
        },
        salario(){
            return 10000.000; 
        },
        nome(){
            return 'Miguel';
        },
        ativo(){
            return true;
        },
        id(){
            return 12123234;
        }

    }

};


const server = new ApolloServer({//instancia
    typeDefs,
    resolvers
})

server.listen()