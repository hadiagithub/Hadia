const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./config/schema');

const app = express();
const port = 4000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`GraphQL server is running on http://localhost:${port}/graphql`);
});
