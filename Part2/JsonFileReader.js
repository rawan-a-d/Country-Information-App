var fs= require('fs')

function read(filename,callback){
	fs.readFile(filename ,'utf-8', function(err,data){
		if (err) {
			throw err
		}
		data = JSON.parse(data)
		callback(data)
	})
};

exports.read = read

