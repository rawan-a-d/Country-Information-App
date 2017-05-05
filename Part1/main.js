var fs = require('fs');
fs.readFile ('countries.json','utf-8', function(err,data){
	if (err){
		throw err;
	}
	data= JSON.parse(data)

	CountryInformation(process.argv[2],data)
});

function CountryInformation(CountryName,info){
	for (var i = 0; i < info.length; i++) {
		if (info[i].name === CountryName) {
			console.log( "Country: " + info[i].name)
			console.log( "TopLevelDomain: " + info[i].topLevelDomain)
		}
	}
}