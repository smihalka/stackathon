const Sequelize = require('sequelize')
const db = require('../db')

const Shot = db.define('shot', {
  coordinate: {
    type: Sequelize.STRING
  }
})

module.exports = Shot
