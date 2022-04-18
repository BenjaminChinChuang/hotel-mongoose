const {successHandle, errorHandle} = require('../../handler/index')
const Room = require('../../models/rooms')

// GET
const getRooms = async res => {
  try {
    const rooms = await Room.find()
    successHandle(res, {data: rooms})
  } catch (error) {
    errorHandle(res, {data: error})
  }
}
module.exports = getRooms
