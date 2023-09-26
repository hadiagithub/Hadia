const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql');
const EmployeeType = require('./employeeType');
const Employee = require('../../models/employee')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve: async () => {
        try {
          const employees = await Employee.findAll();
          return employees;
        } catch (error) {
          throw error;
        }
      },
    },
    employee: {
      type: EmployeeType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (_, args) => {
        try {
          const employee = await Employee.findByPk(args.id);

          if (!employee) {
            throw new Error(`Employee with ID ${args.id} not found.`);
          }

          return employee;
        } catch (error) {
          throw error;
        }
      },
    },
  },
});

module.exports = RootQuery;
