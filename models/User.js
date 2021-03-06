const { model, Schema } = require('mongoose')

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
}, { timestamps: true })

User.plugin(require)

module.exports = model('User', User)