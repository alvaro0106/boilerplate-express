const { response, request } = require('express');
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

// .env ** CORREGIR
app.get("/json", (req, res) => {
  if(process.env.MESSAGE_STYLE === 'uppercase'){
      res.json({"message": "hello json".toUpperCase()})
  }else{
    res.json(message)
  }
});

// Middleware
// app.use((req, res, next) => {
//   console.log(req.method + '' + req.path + '-' + req.ip);
  
// })


// Chain Middleware to Create a Time Server
// app.get("/now", (request, response, next) => {
//   request.time = new Date().toString();
//   next()

// }, (request, response) => {
//   response.json({'time': request.time})

// })


//Get Route Parameter Input from the Client
app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});

// Get Route Parameter Input from the ClientPassed
let people = {
  'alice' : {name: 'Alice', age : 22},
  'bob' : {name: 'bob', age : 12},
  'yo' : {name: 'yo', age : 20},
}

// app.get('profile', (request, response) => {
//   let name = request.name
//   if(people[name]){
//     response.json(people[name])
//   }else{
//     response.json('no foud')
//   }
// })

app.get('/profile',(req, res ) => {
  let name = request.query.name;
  if(people[name]){
    res.json(people[name])
  }else{
    res.json('no foud')
  }
})

