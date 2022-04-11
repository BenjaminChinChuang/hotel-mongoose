const {errorHandle} = require('../../handler/index')
const isRouteError = require('../routeErrorHandler/index')

/** 404 response*/
const routeWrapper = (routePath, targetRoute) => {
  return (req, res) => {
    if (isRouteError(req, routePath)) {
      errorHandle(res, {data: 'no such route.'}, 404)
      return
    }
    return targetRoute.call(this, req, res)
  }
}

module.exports = routeWrapper
