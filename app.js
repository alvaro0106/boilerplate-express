let express = require ('express');

let app = express()

app.listen(3000)

 console.log(__dirname);

app.get("/", function(req, res) 
 { res.sendFile(__dirname + '/views/index.html'); });

app.use('/public', express.static(__dirname + '/public'))


//Sirviendo un objeto json
app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
  });
  