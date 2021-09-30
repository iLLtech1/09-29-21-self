const router = require('express').Router()
const { User } = require('../models')

router.get('/user/:id', async function (req, res) {
  const iser = await User.findById(req.params.is).populate('items')
})

router.get('/user/:id', async function (req, res) {
  const user = await User.create(req.body)
  res.json(user)
})

