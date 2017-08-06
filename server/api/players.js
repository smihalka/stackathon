const router = require('express').Router()
const {Player} = require('../db/models')
module.exports = router

router.get('/:userId', (req, res, next) => {
  Player.findOne({
    where: {
      userId: req.params.userId
    }
  })
    .then(players => res.json(players))
    .catch(next)
})

router.get('/game/:gameId', (req, res, next) => {
  Player.findAll({
    where: {
      gameId: req.params.gameId
    }
  })
    .then(players => res.json(players))
    .catch(next)
})


router.put('/game/', (req, res, next) => {
  Player.update({status: req.body.status},
    {
      where: {
        gameId: req.body.gameId,
        id: req.body.id
      }
    })
    .then(players => res.json(players))
    .catch(next)
})
