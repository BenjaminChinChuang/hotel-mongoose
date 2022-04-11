const {successHandle, errorHandle} = require('../../handler/index')
const errorMsgHandler = require('../../utils/errorMsgHandler')
const Room = require('../../models/rooms')

// PATCH (modified part of data)
const patchRooms = async (req, res, body) => {
  const splitUrl = req.url.split('/').splice(2)
  const ID = splitUrl[0]
  const isRouteError = splitUrl.length > 1

  try {
    if (isRouteError) {
      // catch '/rooms/as123as4/XXXX' or ''/rooms//XXXX''
      errorHandle(res, {data: `PATCH route error.`}, 404)
    }

    if (ID) {
      const data = await JSON.parse(body)
      const rooms = await Room.findByIdAndUpdate(
        ID,
        {...data},
        {
          returnDocument: 'after',
        }
      )
      if (rooms) {
        successHandle(res, {data: rooms})
      }

      // ID.length === 24 & not exsit in DB
      errorHandle(res, {data: `ID: '${ID}' is not exsit.`})
    }
  } catch (error) {
    if (error?.errors) {
      // catch update error
      errorHandle(res, {data: errorMsgHandler(error)})
    }
    // other error (// ID.length !== 24)
    errorHandle(res, {data: `ID: '${ID}' is not exsit.`})
  }
}
module.exports = patchRooms
