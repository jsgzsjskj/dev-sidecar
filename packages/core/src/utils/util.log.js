const log4js = require('log4js')
const config = require('../config/index')
function getDefaultConfigBasePath () {
  return config.server.setting.userBasePath
}
const level = process.env.NODE_ENV === 'development' ? 'debug' : 'info'
log4js.configure({
  appenders: { std: { type: 'stdout' }, file: { type: 'file', pattern: 'yyyy-MM-dd', daysToKeep: 3, filename: getDefaultConfigBasePath() + '/logs/core.log' } },
  categories: { default: { appenders: ['file', 'std'], level: level } }
})
const logger = log4js.getLogger('server')
module.exports = logger
