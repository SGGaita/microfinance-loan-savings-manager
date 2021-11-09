const Sequelize = require('sequelize');
const mysqlConnection = {}
const sequelize = new Sequelize('capep2', 'root', '', {
  host: 'localhost', 
  dialect: 'mysql',

  operatorAliases: false,
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000

  },

});

try {
   sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}



mysqlConnection.sequelize = sequelize;
mysqlConnection.Sequelize = Sequelize;


module.exports = mysqlConnection; //exporting the connection