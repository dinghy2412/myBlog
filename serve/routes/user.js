/**
 * Created by songguo on 2017/7/21.
 */
const express     = require('express');
const router      = express.Router();
const User        = require('../models').User;
const querystring = require('querystring');
const util        = require('util');
const responseFn = require('../tools/responseFn');


//查询指定用户
router.get('/user', function (req, res, next) {
	var userId = req.query.id;
	User.findById(userId).then(function (user) {
		res.set('Content-Type', 'text/html; charset=utf-8');
		responseFn(res, user)
	}).catch(function (err) {
		console.log(err);
		responseFn(res, {}, "00500")
	})
});

router.post('/user', function (req, res, next) {
	var postData = '';
	// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
	req.on('data', function (chunk) {
		postData += chunk;
	});

	// 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
	req.on('end', function () {
		postData = JSON.parse(postData);
		if (postData.userName && postData.phoneNumber && postData.WeChat && postData.gender) {

			User.create(postData).then(function (result) {

				responseFn(res, result._previousDataValues)

			}).catch(function (err) {

				console.log('------------');
				console.log(err.errors[0].message);
				console.log('--------------');

				responseFn(res, {}, "00500", err.errors[0].message)

			});
		} else {
			responseFn(res, {}, "00400")
		}
	});
});

module.exports = router;
