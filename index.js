const http = require('http')
const fs = require('fs')
const server = http.createServer(handleRequest)
const html = fs.readFileSync('index.html')
const records = []

server.listen(3000, () => console.log('http://localhost:3000/page'))

function handleRequest(request, response) {
  if (request.method === 'POST') {
    request.on('data', buffer => {
      const record = String(buffer)
      records.push(record)
      response.end()
    })
  } else if (request.url === '/') {
    response.end(JSON.stringify(records))
  } else {
    response.end(html)
  }
}
