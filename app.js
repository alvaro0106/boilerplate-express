let express = require ('express');

let app = express()

app.listen(3000)

 console.log(__dirname);

app.get("/", function(req, res) 
 { res.sendFile(__dirname + '/index.html'); });
