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
