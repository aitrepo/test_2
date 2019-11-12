var http = require('http');


http.createServer( function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<html>x   <header><title>This is title</title></header>    <body>    Hello world    </body>    </html>");
}
).listen(8080);