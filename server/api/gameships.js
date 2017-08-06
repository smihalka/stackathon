const router = require('express').Router()
const {GameShip} = require('../db/models')
module.exports = router

router.get('/:gameId', (req, res, next) => {
  GameShip.findAll({
    where:{
      gameId: req.params.gameId
    }
  })
    .then(gameships => res.json(gameships))
    .catch(next)
})

router.post('/', (req, res, next) => {
  GameShip.findOne({
    where:{
      shipId: req.body.shipId,
      gameId: req.body.gameId,
      playerId: req.body.playerId
    }
  })
    .then((ship) => {
      if(ship){
        ship.update({
          coordinate: req.body.coordinate,
          orientation: req.body.orientation
        })
          .then(udpate => res.json(udpate))

      }else{
        GameShip.create(req.body)
          .then(ship => res.json(ship))
      }
    })
    .catch(next)
})
