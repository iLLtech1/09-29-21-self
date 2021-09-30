const { model, Schema } =require('mongoose')

consr User = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true
  },

})
