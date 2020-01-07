const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url === '/about')
        res.end('The About Page');
    else if(req.url === '/contact')
        res.end('The Contact Page');
    else if(req.url === '/')
        res.end('The Home Page');
    else {
        res.writeHead(404);
        res.end('page not found');
    }            
});

server.listen(3000);

