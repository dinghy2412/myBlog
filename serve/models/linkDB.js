/**
 * Created by songguo on 2017/7/21.
 */
var Sequelize = require('sequelize'),
	serveInfo = require('../config/serveInfo');

exports.sequelize = function () {
	return new Sequelize(serveInfo.config.database, serveInfo.config.username, serveInfo.config.password, {
		host : serveInfo.config.host,
		dialect : serveInfo.dialect,
		pool : {
			max : 5,
			min : 0,
			idle : 10000
		}
	})
}