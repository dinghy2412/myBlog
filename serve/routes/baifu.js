const express     = require('express');
const router      = express.Router();
const md5=require("md5");
const http = require('http');

router.get('/baifu/WXJSSDK', function (req1, ress, next) {
    var data = {
        appid : 10002,
        mothed : "openapi.Wechatapp.getJsSdkConfig",
        secret : "aeddb9614bcec9aadbab466bfbade164",
        timestamp : Math.floor(Date.parse(new Date()) / 1000),
        url : req1.query.url
    };

    var str = "";
    for (var e in data) {
        str += e + "=" + data[e] + "&"
    }
    str = str.slice(0, str.length - 1);

    var sign = md5(str);
    delete data.secret;
    data.sign = sign;
    data = JSON.stringify(data);

    var options = {
        method: 'POST',
        host: 'api.qcywx.cn',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    var req = http.request(options, function (res) {
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            ress.set('Content-Type', 'application/json;charset=UTF-8');
            var jsonpCallback = 'jsonpCallback'+'('+data+');';
            ress.end(jsonpCallback)
            console.log(data)
        });
    });
    req.write(data);
    req.end();
});

module.exports = router;


