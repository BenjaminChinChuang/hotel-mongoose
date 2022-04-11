const getHeader = require('../utils/getHeader')

/** request fail
 * @param res response
 * @param errorData custom error to send
 * @param errorCode default status code is 400
 */
function errorHandle(res, errorData = {}, errorCode = 400) {
  res.writeHead(errorCode, getHeader())
  res.write(
    JSON.stringify({
      status: 'fail',
      ...errorData,
    })
  )
  res.end()
}

module.exports = errorHandle
