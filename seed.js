const db = require('./server/db/index')
let Promise = require('bluebird')

const _users = [
  {
    "email" : "shayne@mihalka.com",
    "googleId" : "104277003462992516974"
  },
  {
    "email" : "vtapunk@gmail.com",
    "googleId" : "111873175279766000759"
  }
]

const _shots = [
  {
    "coordinate" : 'A2',
    "playerId" : 1,
    "gameId" : 1
  }
]

const _ships = [
  {name: 'Carrier', size: 5},
  {name: 'Battleship', size: 4},
  {name: 'Cruiser', size: 3},
  {name: 'Submarine', size: 3},
  {name: 'Destroyer', size: 2}
]

const _players = [
  {
    "gameId" : 1,
    "userId" : 1,
    'status' : 0
  },
  {
    "gameId" : 1,
    "userId" : 2,
    'status' : 0
  }
]

const _gameships = [
  {
    "shipId" : 1,
    "gameId" : 1,
    "playerId" : 1,
    "orientation" : 'vertical',
    "coordinate" : 'A2'
  },
  {
    "shipId" : 1,
    "gameId" : 1,
    "playerId" : 2,
    "orientation" : 'horizontal',
    "coordinate" : 'C2'
  }
]

const _games = [
  {
    "id" : 1,
    "turnId" : 2,
    'status' : 0,
    'winner' : 0
  }
]

let seed = (_seedData, model) => {
  return Promise.map(_seedData, (data) => {
    return db.model(model).create(data)
  })
}

db.sync({force: true})
  .then(() => {
      console.log('dropped old data, now inserting new data')
  })
  .then(() => seed(_ships, 'ship'))
  .then(ships => console.log(`Seeded ${ships.length} ships OK!`))
  .then(() => seed(_users, 'user'))
  .then(users => console.log(`Seeded ${users.length} users OK!`))
  .then(() => seed(_games, 'game'))
  .then(games => console.log(`Seeded ${games.length} games OK!`))
  .then(() => seed(_players, 'player'))
  .then(players => console.log(`Seeded ${players.length} players OK!`))
  // .then(() => seed(_gameships, 'gameship'))
  // .then(gameships => console.log(`Seeded ${gameships.length} gameships OK!`))
  // .then(() => seed(_shots, 'shot'))
  // .then(shots => console.log(`Seeded ${shots.length} reviews OK!`))
  .then(() => {
    console.log('Seeding complete OK!')
  })
  .catch((err) => {
    console.error('There was a problem seeding the database', err, err.stack)
  })
  .finally(() => {
    db.close()
    console.log('seed db connection closed OK!')
    return null
  })
