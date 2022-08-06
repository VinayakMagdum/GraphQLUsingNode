const graphql = require('graphql');

/**
 * Extracting below attributes from graphql
 */
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = graphql;

/**
 * Defining valid type of user
 * @type {GraphQLObjectType<any, any>}
 */
// This is nothing but TypeDefs
const  userType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    email: {type: GraphQLString}
  })
})


module.exports = userType;
