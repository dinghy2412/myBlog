/**
 * Created by songguo on 2017/7/21.
 */
const express = require('express');
const router = express.Router();
const Article = require('../models').Article;
const User = require('../models').User;
const responseFn = require('../tools/responseFn');
const permission = require('../tools/permission');

//articleList 查询列表文章
router.get('/articleList', (req, res, next) => {
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

    Article.findAll(findAllObj).then((articleList) => {
        responseFn(res, articleList)
    }).catch(next)

});

router.post('/article', function (req, res, next) {
    var postData = '';
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function (chunk) {
        postData += chunk;
    });

    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {
        postData = JSON.parse(postData);
        var tokenFlag = permission(patchData.token);

        if (postData.title && postData.HTML && postData.menuType && postData.authorId && tokenFlag) {
            Article.create(postData).then((result) => {
                var response = result._previousDataValues;
                responseFn(res, response, undefined, undefined, 'PATCH')
            }).catch((err) => {
                responseFn(res, {}, "00500", undefined, 'PATCH')
            });

        } else {
            responseFn(res, {}, tokenFlag ? "00400" : "00300", undefined, 'PATCH')
        }
    });

    res.set('Content-Type', 'application/json;charset=UTF-8');

});

router.patch('/article', (req, res, next) => {
    var patchData = '';
    req.on('data', (chunk) => {
        patchData += chunk;
    });
    req.on('end', () => {
        patchData = JSON.parse(patchData);
        var tokenFlag = permission(patchData.token);
        var articleId = patchData.articleId;
        delete patchData.articleId;
        if (articleId && tokenFlag) {
            Article.update(
                patchData, {
                    'where' : {'id' : articleId}
                }
            ).then(result => {
                Article.findById(articleId).then(result => {
                    var response = result.dataValues;
                    responseFn(res, response, undefined, undefined, 'PATCH')
                })
            }).catch(err => {
                responseFn(res, {}, "00500", undefined, 'PATCH')
            })
        } else {
            responseFn(res, {}, tokenFlag ? "00400" : "00300", undefined, 'PATCH')
        }
    });

    res.set('Content-Type', 'application/json;charset=UTF-8');
});

router.delete('/article', (req, res, next) => {
    var articleId = req.query.articleId;
    var token = req.query.token;
    var tokenFlag = permission(token);

    if (articleId && tokenFlag) {
        Article.destroy({'where':{'id':articleId}}).then(function (articleList) {
            responseFn(res, {}, articleList > 0 ? "0" : "00400", articleList > 0 ? undefined :'Not found')
        }).catch(next)
    } else {
        responseFn(res, {}, tokenFlag ? "00400" : "00300")
    }
});

module.exports = router;
