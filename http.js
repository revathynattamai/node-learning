const http = require('http');

const server = http.createServer((req, res) => {
    // res.end('<h1>Success</h1>'); //Displays as html in the browser

    // res.setHeader('Content-Type', 'text/plain');
    // res.end('<h1>Success</h1>'); //<h1>Success</h1> in the browser

    res.setHeader('Content-Type', 'text/html'); 
    res.end('<form method=POST>Name: <input type="text"></input></form>');
});

server.listen(5000);