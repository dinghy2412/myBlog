/**
 * Created by songguo on 2017/7/18.
 */
const express       = require('express');
const articleRoutes = require('./routes/article');
const userRoutes    = require('./routes/user');
const baifu    		= require('./routes/baifu');

const app = express();

app.use('/api/v1', articleRoutes);

app.use('/api/v1', userRoutes);

app.use('/api/v1', baifu);

var server = app.listen(8080, 'localhost', function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
});

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8181 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        var tempData = JSON.parse(message);
        tempData.status = '已接收';
        setTimeout(function () {
            ws.send(JSON.stringify(tempData));
        }, 2000);
    });

});

