/**
 * Created by songguo on 2017/7/21.
 */
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('user', {
			userName : {
				type : DataTypes.STRING,
				allowNull : false,
                charset : "utf8"
            },
			phoneNumber : {
				type : DataTypes.STRING,
				unique : true
			},
			WeChat : {
				type : DataTypes.STRING,
				allowNull : false,
				unique : true
			},
			gender : {
				type : DataTypes.STRING,
				allowNull : false
			},
			id : {
				type : DataTypes.BIGINT(11),
				autoIncrement:true,
				primaryKey : true
			}
		},
		{
			timestamps : true,
			freezeTableName : true
		})
};