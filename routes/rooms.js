const routeWrapper = require('./common/routeWrapper')
const {
  getRooms,
  postRooms,
  deleteRooms,
  patchRooms,
  optionRooms,
} = require('../apis/rooms/index')

const routhPath = 'rooms'
const roomsRoute = async (req, res) => {
  // http 傳來的 body 資訊
  let body = ''
  // 當 req 收到片段的 chunk 時，將資料加入 body 內
  req.on('data', dataChunks => {
    body += dataChunks
  })

  const METHOD = req.method
  switch (METHOD) {
    case 'GET':
      getRooms(res)
      break
    case 'POST':
      req.on('end', () => {
        postRooms(req, res, body)
      })
      break
    case 'DELETE':
      deleteRooms(req, res)
      break
    case 'PATCH':
      req.on('end', () => {
        patchRooms(req, res, body)
      })
      break
    case 'OPTIONS':
      optionRooms(res)
      break
    default:
      break
  }
}

module.exports = routeWrapper(routhPath, roomsRoute)
