const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/games', require('./games'))
router.use('/ships', require('./ships'))
router.use('/shots', require('./shots'))
router.use('/gameships', require('./gameships'))
router.use('/players', require('./players'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
