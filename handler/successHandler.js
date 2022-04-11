const getHeader = require('../utils/getHeader')

/** 成功
 * @param res response
 * @param data custom data to send
 */
function successHandle(res, data = {}) {
  res.writeHead(200, getHeader())
  res.write(
    JSON.stringify({
      status: 'success',
      ...data,
    })
  )
  res.end()
}

module.exports = successHandle
