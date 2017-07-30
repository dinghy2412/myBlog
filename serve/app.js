/**
 * Created by songguo on 2017/7/18.
 */
const express       = require('express');
const articleRoutes = require('./routes/article');
const userRoutes    = require('./routes/user');

const app = express();

app.use('/api/v1', articleRoutes);

app.use('/api/v1', userRoutes);

var server = app.listen(8080, 'localhost', function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
});