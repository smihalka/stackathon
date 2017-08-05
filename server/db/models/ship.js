const Sequelize = require('sequelize')
const db = require('../db')

const Ship = db.define('ship', {
  name: {
    type: Sequelize.STRING
  },
  size: {
    type: Sequelize.INTEGER
  }
})

module.exports = Ship
