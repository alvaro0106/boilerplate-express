let express = require ('express');
let app = express()
app.listen(3001)
require('dotenv').config()

//console.log(__dirname);

app.get("/", function(req, res) 
 { res.sendFile(__dirname + '/views/index.html'); });

app.use('/public', express.static(__dirname + '/public'))


// Sirviendo un objeto json
// app.get("/json", (req, res) => {
//     res.json({
//       message: "Hello json"
//     });
//   });


//Use file .env
//Agreguemos una variable de entorno como opción de configuración.

//Imprime variable env
// console.log(process.env.MESSAGE_STYLE)

let message = {message: "Hello Json"};

// .env
app.get("/json", (req, res) => {
  if(process.env.MESSAGE_STYLE === 'uppercase'){
      res.json({"message": "hello json".toUpperCase()})
  }else{
    res.json(message)
  }
});


// Middleware
app.use((req, res, next) => {
  console.log(req.method + '' + req.path + '-' + req.ip);
  
})
