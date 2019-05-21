// const Sequelize = require('sequelize')

// module.exports = new Sequelize('mysql://root:Toronto!7@localhost:3306/burgers_db')

const { createConnection } = require('mysql2')

module.exports = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Toronto!7',
  database: 'burgers_db'
})












