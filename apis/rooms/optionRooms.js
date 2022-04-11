const getHeader = require('../../utils/getHeader')

const optionRooms = res => {
  res.writeHead(200, getHeader())
  res.end()
}

module.exports = optionRooms
