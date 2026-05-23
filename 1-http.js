const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Our Home Page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Ooops!</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Back Home</a>
    `)
})

server.listen(5000)