/**
 * Created by songguo on 2017/7/21.
 */
const express = require('express');
const router = express.Router();
const Article = require('../models').Article;
const User = require('../models').User;
const responseFn = require('../tools/responseFn');

//articleList 查询列表文章
router.get('/articleList', function (req, res, next) {
    var menuType = req.query.menuType ? req.query.menuType : null,
        tag = req.query.tag ? req.query.tag : null,
        findAllObj = {
            include : [{
                model : User,
                as : "author",
                attributes : {exclude : ['authorId']}
            }],
            order : [['id', 'DESC']],
            logging : true
        };
    if (menuType) {
        findAllObj.where = {
            // tags : {
            //     $like : '%3%' //搜索
            // },
            menuType : menuType
        }
    }

    if (tag) {
        findAllObj.where.tags = {
            tags : {
                $like : `%${tag}%`
            }
        };
    }

    Article.findAll(findAllObj).then(function (articleList) {
        responseFn(res, articleList)
    }).catch(next)

});

router.post('/articleList', function (req, res, next) {
    var postData = '';
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function (chunk) {
        postData += chunk;
    });

    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {

        postData = JSON.parse(postData);

        if (postData.title && postData.HTML && postData.menuType && postData.authorId) {
            Article.create(postData).then(function (result) {
                var response = result._previousDataValues;
                responseFn(res, response)
            }).catch(function (err) {
                console.log(err);
                responseFn(res, {}, "00500")

            });

        } else {
            responseFn(res, {}, "00400")
        }
    });
});

module.exports = router;
