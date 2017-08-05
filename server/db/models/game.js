const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('game', {
  turnId: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

module.exports = Game
