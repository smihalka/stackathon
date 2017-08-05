const router = require('express').Router()
const {Shot} = require('../db/models')
module.exports = router

router.get('/:gameId', (req, res, next) => {

  Shot.findAll({where:{
    gameId: req.params.gameId
  }
  })
    .then(shots => res.json(shots))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Shot.create(req.body)
    .then(shots => res.json(shots))
    .catch(next)
})
