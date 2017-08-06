const Sequelize = require('sequelize')
const db = require('../db')

const Player = db.define('player', {
  status: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Player
