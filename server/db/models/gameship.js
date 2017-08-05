const Sequelize = require('sequelize')
const db = require('../db')

const GameShip = db.define('gameship', {
  orientation: {
    type: Sequelize.STRING
  },
  coordinate: {
    type: Sequelize.STRING
  }
})

module.exports = GameShip
