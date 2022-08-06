const { GraphQLInt,
  GraphQLString
} = require('graphql');
const userType = require('../typedefs/userTypeDef')
const {data} = require('../queries/userQuery')

const addUser = {
  type: userType,
  args: {
    id:{type: GraphQLInt},
    name:{type: GraphQLString},
    email:{type: GraphQLString}
  },
  resolve(parent, args){
    data.push(args)
    console.log("USerd added successfully!!!")
    return args;
  }
}

module.exports  = {
  addUser: addUser
}
