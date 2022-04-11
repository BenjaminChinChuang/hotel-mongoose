const {successHandle, errorHandle} = require('../../handler/index')
const Room = require('../../models/rooms')

const isDeleteAll = requestUrl =>
  requestUrl.split('/').filter(e => e).length === 1

// DELETE
const deleteRooms = async (req, res) => {
  const splitUrl = req.url.split('/').splice(2)
  const ID = splitUrl[0]
  const isRouteError = splitUrl.length > 1

  try {
    if (isDeleteAll(req.url)) {
      // delete all
      await Room.deleteMany({})
      successHandle(res, {data: []})
    } else {
      // delete one

      if (isRouteError) {
        // catch '/rooms/as123as4/XXXX' or ''/rooms//XXXX''
        errorHandle(res, {data: `DELETE route error.`}, 404)
      }

      if (ID) {
        const rooms = await Room.findByIdAndDelete(ID)

        if (rooms) {
          successHandle(res, {data: `${ID} is deleted successfully.`})
        }
        // ID.length === 24 & not exsit in DB
        errorHandle(res, {data: `ID: '${ID}' is not exsit.`})
      }
    }
  } catch (error) {
    // other error (// ID.length !== 24)
    errorHandle(res, {data: `ID: '${ID}' is not exsit.`})
  }
}
module.exports = deleteRooms
