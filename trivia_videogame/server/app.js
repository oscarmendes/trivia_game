let path = require('path');
let http = require('http');
let express = require('express'); //Express
let publicPath = path.join(__dirname,'/../public'); //module path
let port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})