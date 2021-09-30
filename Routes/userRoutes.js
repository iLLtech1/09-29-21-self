const router = require('express').Router()
const { User } = require('../models')
const passport =require('passport')

router.get('/users/:id', async function (req, res) {
  const user = await User.findById(req.params.id).populate('items')
  res.json(user)
})

router.post('/users', (req, res) => {
  const user = await User.create(req.body)
  User.register(new User({ name, username }), req.body.passwprd, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.post('/user/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res,json(user ? jwt.sign(id)
  })
})

router.put('/users/:id', async function (req, res) {
  await User.findByIdAndUpdate(req.params.id, { $set: req.body })
  res.sendStatus(200)
})

router.delete('/users/:id', async function (req, res) {
  await User.findByIdAndRemove(req.params.id)
  res.sendStatus(200)
})

module.exports = router

//WK8DY3 @ end 00:01:32:00

