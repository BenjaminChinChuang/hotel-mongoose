const mongoose = require('mongoose')

const RoomsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required.'], // 撰寫回饋訊息使用array
    },
    price: {
      type: Number,
      required: [true, 'price is required.'],
    },
    payment: {
      type: [String],
      required: true, // because default will give empty array. Empty array is required.
      validate: [value => value.length > 0, 'payment is required.'],
    },
    rating: Number,
  },
  {
    versionKey: false,
    collection: 'rooms', // 這邊直接寫死，mongoose.model那邊就不會做更改
    timestamps: true,
  }
)

// keep the validation while updating
RoomsSchema.pre('findOneAndUpdate', function (next) {
  this.options.runValidators = true
  next()
})

module.exports = mongoose.model('Rooms', RoomsSchema)
