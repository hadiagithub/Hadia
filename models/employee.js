const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  empname: DataTypes.STRING,
  job: DataTypes.STRING,
  department: DataTypes.STRING,
  salary: DataTypes.INTEGER,
  hire_date: DataTypes.STRING,
}, {
  tableName: 'emp',
  timestamps: false,
});

module.exports = Employee;
