const http = require('http')
const mongoose = require('mongoose')
const roomsListener = require('./routes/rooms')

const DATABASE = 'mongodb://localhost:27017/hotel'
const PORT = process.env.PORT || 3777

mongoose
  .connect(DATABASE)
  .then(() => console.log('db connected.'))
  .catch(err => console.log(err.reason))

const server = http.createServer(roomsListener)
server.listen(PORT)
