/**
 * Created by songguo on 2017/7/25.
 */
const msgObj = {
	"00400" : "Bad Request",
	"00500" : "Server Error"
};

module.exports = function (res, result, code = "0", msg = "Success") {
	var responseMsg = msg;
	if (code !=="0" && msg === "Success") {
		responseMsg = msgObj[code]
	}

	var data = {
		code : code,
		msg : responseMsg,
		result : result
	};
	res.set('Content-Type', 'application/json;charset=UTF-8');
	res.end(JSON.stringify(data))
};