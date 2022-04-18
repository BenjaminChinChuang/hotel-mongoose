const http = require('http')
const mongoose = require('mongoose')
const roomsListener = require('./routes/rooms')

const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const DATABASE = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
)

const PORT = process.env.PORT

mongoose
  .connect(DATABASE)
  .then(() => console.log('db connected.'))
  .catch(err => console.log(err))

const server = http.createServer(roomsListener)
server.listen(PORT)
