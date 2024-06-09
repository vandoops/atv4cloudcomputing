const app =require('./app');
const http =require('http');

const port = 3030;


const server = http.createServer(app);
server.listen(port, () => {
    console.log(`App running on port: ${port}`);
})
