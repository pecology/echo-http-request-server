const port = parseInt(process.argv[2]);

const net = require('net');
net.createServer(socket => {
    socket.on('data', receiveData => {
        const response = buildHttpResponse(receiveData);
        socket.write(response);
    });
}).listen(port);

const buildHttpResponse = responseContent => {
    const byteLength = Buffer.from(responseContent).length;
    const httpReponse = 
`HTTP/1.1 200 OK
Content-Length: ${byteLength}

${responseContent}
`;
    return httpReponse;
}