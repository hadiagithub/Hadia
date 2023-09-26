const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');
const EmployeeType = require('./employeeType');
const Employee = require('../../models/employee');

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createEmployee: {
      type: EmployeeType,
      args: {
        empname: { type: GraphQLString },
        job: { type: GraphQLString },
        department: { type: GraphQLString },
        salary: { type: GraphQLInt },
        hire_date: { type: GraphQLString },
      },
      resolve: async (_, args) => {
        try {
          const newEmployee = await Employee.create({
            empname: args.empname,
            job: args.job,
            department: args.department,
            salary: args.salary,
            hire_date: args.hire_date,
          });

          return newEmployee;
        } catch (error) {
          throw error;
        }
      },
    },
  },
});

module.exports = RootMutation;
