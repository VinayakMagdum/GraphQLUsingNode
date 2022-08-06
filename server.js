const express = require('express');
const app = express();
const PORT = 3000;

//extracting graphqlHTTP attribute from express-graphql
const {graphqlHTTP} = require('express-graphql');

const schema = require('./schema/index');

app.use(express.json());

app.use('/graphql',
  graphqlHTTP({
    schema,
    graphiql : true
  })
);

app.listen(PORT, ()=> {
  console.log(`App is Listening at http://localhost:${PORT}`)
})

