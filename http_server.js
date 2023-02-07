const http = require('http')

// os, fs, path, url

const server = http.createServer((req, res) => {
    res.write('Hello client over there!')
    res.end()
})

server.listen(process.env.PUBLIC_PORT, () => {
    console.log('Hey! we are ready to take requests')
})