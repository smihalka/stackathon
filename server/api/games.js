const router = require('express').Router()
const {Game} = require('../db/models')
module.exports = router

router.get('/:id', (req, res, next) => {
  Game.findById(req.params.id)
    .then(games => res.json(games))
    .catch(next)
})


router.put('/:id', (req, res, next) => {
  Game.update(req.body,
    {
      where:{
        id: req.params.id
      }
    })
    .then(games => res.json(games))
    .catch(next)
})
