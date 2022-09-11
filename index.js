// return value of the csv-parse is a function, which returns and 
// event emittor that deals with stream of data from a file, parse()
// does not deals with files directly, it only knows about stream
const parse = require('csv-parse');
const fs = require('fs');

const results =[];

fs.createReadStream('./kepler_data.csv')
	.on('data', (data) => {
		results.push(data);
	})
	.on('error', (err) => {
		console.log(err);
	})
	.on('end', () => {
		console.log(results);
		console.log('done processing the file');
	});

