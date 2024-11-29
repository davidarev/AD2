export const schema = `#graphql
    type Vuelo{
        id: ID!
        origen: String!
        destino: String!
        fecha_hora: String!
    }

    type Query {
        getFlights(origen: String, destino: String): [Vuelo!]!
        getFlight(id: ID!): Vuelo
    }

    type Mutation {
        addFlight(origen: String!, destino: String!, fecha_hora: String!): Vuelo!
    }
`