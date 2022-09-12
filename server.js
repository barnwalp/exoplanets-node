const http = require('http');

const PORT = 3000;

// Both req and res are data stream. req is readable and res is writable
const server = http.createServer((req, res) => {
	res.writeHead(200, {
		// when only plain text is to be displayed on server
		// 'Content-Type': 'text/plain',
		
		// sending object to the server
		'Content-Type': 'application/json',
	});
	// res.end('Hello world');
	res.end(JSON.stringify({
		id: 1,
		name: 'Newton',
	}));
});

server.listen(PORT, () => {
	console.log('Listening on port 3000');
}); //127.0.0.1
