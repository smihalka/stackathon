const router = require('express').Router()
const {Ship} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Ship.findAll({
  })
    .then(ships => res.json(ships))
    .catch(next)
})
