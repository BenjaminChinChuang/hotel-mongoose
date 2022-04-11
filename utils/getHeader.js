const getHeader = (customHeader = {}) => {
  const header = {
    'Access-Control-Allow-Headers':
      'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, OPTIONS, DELETE',
    'Content-Type': 'application/json',
    ...customHeader,
  }

  return header
}

module.exports = getHeader
