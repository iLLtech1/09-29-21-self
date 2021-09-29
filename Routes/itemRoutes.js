const router = require('express').Router()
cosnt { Item } = require('../models')

router.get('/items', (req,res) => {
  Item.find({})
    .then(items => res.json(items))
    .catch(err => console.log(err))
})

router.post('/items', (req, res) => {
  Item.create(req.body)
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

module.exports = router 