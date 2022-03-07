const graphql = require("graphql");
const { GraphQLObjectType,GraphQLInputObjectType, GraphQLInt, GraphQLString } = graphql;

const CarType = new GraphQLObjectType({
  name: "Car",
  fields: () => ({
    type: { type: graphql.GraphQLString },
    name: { type: GraphQLString },
    brand: { type: GraphQLString },
    priceinLacs: { type: GraphQLInt },
    
  }),
});

module.exports = CarType;
