/**
 * Created by songguo on 2017/7/25.
 */
const msgObj = {
	"00300" : "Insufficient permissions",
	"00400" : "Bad Request",
	"00500" : "Server Error"
};

module.exports = (res, result, code = "0", msg = "Success", type = 'GET') => {
	var responseMsg = msg;
	if (code !=="0" && msg === "Success") {
		responseMsg = msgObj[code]
	}

	var data = {
		code : code,
		msg : responseMsg,
		result : result
	};
	if (type === 'GET') {
        res.set('Content-Type', 'application/json;charset=UTF-8');
    }

	res.end(JSON.stringify(data))
};