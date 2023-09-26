const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: {
    id: { type: GraphQLInt },
    empname: { type: GraphQLString },
    job: { type: GraphQLString },
    department: { type: GraphQLString },
    salary: { type: GraphQLInt },
    hire_date: { type: GraphQLString },
  },
});

module.exports = EmployeeType;
