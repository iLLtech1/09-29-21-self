const router = require('express').Router()
const { Item, User } = require('../models')
const passport = require('passport')

// router.get('/items', (req, res) => {
//   Item.find({})
//     .then(items => res.json(items))
//     .catch(err => console.log(err))
// })

//Above is the original Syntax for the Get command,Below is the shorter version
router.get('/items', async function (req, res) {
  const items = await Item.find({}).populate('user')
  res.json(items)
})

// router.post('/items', (req, res) => {
//   Item.create(req.body)
//     .then(item => res.json(item))
//     .catch(err => console.log(err))
// })

//Above is the original Syntax for the Post command,Below is the sh0rter version
router.post('/items', async function (req, res) {
  const item = await Item.create({ ...req.body, user: req.user._id })
  await User.findByIdAndUpdate(req.body.user, { $push: { items: item._id } })//Wk8Dy3 01:32:30
  res.json(item)
})

//below is the PUT method command for updating status from False to True
router.put('/items/:id', async function (req, res) {
  await Item.findByIdAndUpdate(req.params.id, { $set: req.body })
  res.sendStatus(200)
})

//below is the Delete Route
router.delete('/items/:id', async function (req, res) {
  await Item.findByIdAndRemove(req.params.id)
  res.sendStatus(200)
})

module.exports = router 

