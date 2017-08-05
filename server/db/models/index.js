const User = require('./user')
const Game = require('./game')
const Player = require('./player')
const Ship = require('./ship')
const GameShip = require('./gameship')
const Shot = require('./shot')

Player.belongsTo(User)
Player.belongsTo(Game)

Game.hasMany(Player)

GameShip.belongsTo(Ship)
GameShip.belongsTo(Game)
GameShip.belongsTo(Player)

Shot.belongsTo(Player)
Shot.belongsTo(Game)

module.exports = {
  User,
  Player,
  Game,
  Ship,
  GameShip,
  Shot
}
