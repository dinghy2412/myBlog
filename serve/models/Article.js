/**
 * Created by songguo on 2017/7/21.
 */
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('article', {
			title : {
				type : DataTypes.STRING,
				allowNull : false,
                charset : "utf8"
			},
			tags : {
				type : DataTypes.STRING,
                charset : "utf8",
                get : function () {
					const tags = JSON.parse(this.getDataValue('tags'));
					return tags
				},
				set : function (tags) {
					return this.setDataValue('tags', JSON.stringify(tags))
				}
			},
            menuType : {
                type : DataTypes.STRING,
                allowNull : false
            },
			id : {
				type : DataTypes.BIGINT(11),
				autoIncrement:true,
				primaryKey : true
			},
			HTML : {
				type : DataTypes.TEXT,
				allowNull : false,
                charset : "utf8"
            }
		},
		{
			timestamps : true,
			freezeTableName : true
		})
};