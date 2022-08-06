const { GraphQLList } = require('graphql');
const userType = require('../typedefs/userTypeDef')

var data = [
  {
    id: 1,
    name: 'abc',
    email: 'abc.com'
  },
  {
    id: 2,
    name: 'pqr',
    email: 'pqr.com'
  },
  {
    id: 3,
    name: 'xyz',
    email: 'xyz.com'
  }
]

const getUserDetails = {
  type: new GraphQLList(userType),
  resolve(parent, args){
    return data;
  }
}

const getUserIdAndName = {
  type: new GraphQLList(userType),
  resolve(parent, args){
    let data = [
      {
        id: 1,
        name: 'abc lmn',
      },
      {
        id: 2,
        name: 'pqr rst',
      },
      {
        id: 3,
        name: 'xyz uvw',
      }
    ]
    return data;
  }
}

module.exports = {
  getUserDetails: getUserDetails,
  getUserIdAndName: getUserIdAndName,
  data: data
}
