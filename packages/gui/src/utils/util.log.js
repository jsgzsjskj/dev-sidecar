const log4js = require('log4js')
const DevSidecar = require('@docmirror/dev-sidecar')
const getDefaultConfigBasePath = function () {
  return DevSidecar.api.config.get().server.setting.userBasePath
}
const level = process.env.NODE_ENV === 'development' ? 'debug' : 'info'
log4js.configure({
  appenders: { std: { type: 'stdout' }, file: { type: 'file', pattern: 'yyyy-MM-dd', daysToKeep: 3, filename: getDefaultConfigBasePath() + '/logs/gui.log' } },
  categories: { default: { appenders: ['file', 'std'], level: level } }
})
const logger = log4js.getLogger('server')
module.exports = logger
