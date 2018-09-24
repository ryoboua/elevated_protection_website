require('dotenv').config()
const app = require('./app.js');  
const port = process.env.PORT;

app.listen(port, function() {  
    console.log('Express server listening on port ' + port);
});