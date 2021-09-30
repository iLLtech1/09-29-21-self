const { model, Schema } = require('mongoose')

const Item = new Schema({
  text: {
    type: String,
    require: true
  },
  isDone: {
    type: Boolean,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Item', Item)