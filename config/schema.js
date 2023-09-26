const { GraphQLSchema } = require('graphql');
const RootQuery = require('../modules/Employee/queries');
const RootMutation = require('../modules/Employee/mutations');

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = schema;
