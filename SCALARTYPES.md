# Nesta segunda aula vamos falar dos tipos escalares do Graphql

## Os tipos escalares sao:
    * Int
    * Float
    * String
    * Boolean
    * ID

***

# const typeDefs = gql``

    * Aqui, estamos definindo nossos tipos GraphQL usando a função gql que importamos anteriormente. 
    No entanto, neste exemplo, não estamos definindo nenhum tipo. Essa definição de tipo será preenchida 
    posteriormente com os tipos GraphQL reais do nosso esquema.

# const resolvers = {}

    * Estamos definindo um objeto vazio chamado resolvers. Os resolvers são responsáveis por 
    fornecer a funcionalidade para cada campo nos tipos definidos em typeDefs. Neste exemplo, 
    não estamos definindo nenhum resolver ainda.

***

### gql: É uma função que nos permite escrever nossos esquemas GraphQL usando uma sintaxe especial, que é transformada em um objeto JavaScript compreensível pelo Apollo Server.
### ApolloServer: É a classe principal do Apollo Server, que usaremos para configurar e iniciar o servidor GraphQL.
