const {successHandle, errorHandle} = require('../../handler/index')
const errorMsgHandler = require('../../utils/errorMsgHandler')
const Room = require('../../models/rooms')

// POST
const postRooms = async (req, res, body) => {
  try {
    const data = await JSON.parse(body)
    const newRoom = await Room.create(data)

    successHandle(res, {data: newRoom})
  } catch (error) {
    errorHandle(res, {data: errorMsgHandler(error)})
  }
}
module.exports = postRooms
