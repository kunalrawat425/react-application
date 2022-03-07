const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
let carData = require("../../server/CAR_MOCK_DATA.json");
const CarType = require("./TypeDefs/CarType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllCars: {
      type: new GraphQLList(CarType),
      args: {
        brand: { type: GraphQLString },
        priceinLacs: { type: GraphQLString },
        type: { type: GraphQLString },
        limit: { type: GraphQLString },
        // options: { type: [GraphQLString] },
      },
      resolve(parent, args) {
        // args = { brand: ["Toyota", "BMW"] };

        return carData;
        //for filtering data 
        let data = [];
        for (let arg in args) {
          let key = null;
          for (let values in args[arg]) {
            key = args[arg][values];

            data.push(
              ...carData.filter((car) => {
                return car[arg] == key;
              })
            );
          }
        }
        return data;
      },
    },
  },
});

// module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
module.exports = new GraphQLSchema({ query: RootQuery });
