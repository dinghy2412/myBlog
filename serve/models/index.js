/**
 * Created by songguo on 2017/7/21.
 */
const sequelize = require('./linkDB').sequelize();
const Article = sequelize.import('./Article.js');
const User = sequelize.import('./User.js');

//建立模型关系
User.hasOne(Article, {as : "author"});
Article.belongsTo(User, {as : "author"});

//同步到数据库
sequelize.sync();

exports.User = User;
exports.Article = Article;
