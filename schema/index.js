const graphql = require('graphql');

/**
 * Extracting below attributes from graphql
 */
const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;
const {getUserDetails, getUserIdAndName}  = require('./queries/userQuery')

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  fields: {
    //Function that will called to get full user details
    //This is nothing but Resolver
    getUserDetails: getUserDetails,

    //Function that will called to get username and id
    getUserIdAndName: getUserIdAndName,
  }
})

const {addUser} = require('./mutation/userMutation')

const mutation =  new GraphQLObjectType({
  name: 'mutation',
  fields: {
    createUser: addUser
  }
})

module.exports = new GraphQLSchema({query: rootQuery, mutation: mutation})
