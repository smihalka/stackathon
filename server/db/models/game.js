const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('game', {
  turnId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  status: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  winner: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Game
