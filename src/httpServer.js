const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
  
const mimeTypes = {
  '.html': 'text/html',
  '.jgp': 'image/jpeg',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.svgz': 'image/svg+xml',
};

const getContentType = pathName => {  
  const fileExtension = path.extname(pathName);
  if (Object.keys(mimeTypes).includes(fileExtension)) {
    return mimeTypes[fileExtension];
  }
  return 'application/octet-stream';
};

const httpServer = http.createServer((request, response) => {
  const pathName = url.parse(request.url, true).pathname;
  response.setHeader('Content-Type', getContentType(pathName));
  const baseDir = path.join(__dirname, './assets');
  fs.readFile(`${baseDir}${pathName}`, (error, data) => {
    if (error) {
      console.log(error);
      response.writeHead(404);
      response.end('404 - File Not Found');
      return;
    }
    response.writeHead(200);
    response.end(data);
    return; 
  });
});
 
const server = {};   

server.init = (port = 3000, host = '127.0.0.1') => {
  httpServer.listen(port, () => {
    console.log(`\x1b[32m%s\x1b[0m`, `Server is running at http://${host}:${port}`);
  });
};

module.exports = server;
