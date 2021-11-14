const bodyParser = require('body-parser');
var express = require('express');
var app = express();

//Meet the Node consolePassed
//console.log("Hello World");

//Start a Working Express ServerPassed
app.get("/", function(req, res) {
  res.send("Hello Express");
});

//Serve an HTML FilePassed
app.get("/", function(req, res) 
 { res.sendFile(__dirname + '/views/index.html'); });

//Server static Assets
app.use('/public', express.static(__dirname + '/public'))

// Serve JSON on a Specific RoutePassed
app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
  });

// Use the .env File ***  TERRMINAR
// app.get("/json", (req, res) => {
//   if(process.env.MESSAGE_STYLE === 'uppercase'){
//       res.json({"message": "hello json".toUpperCase()})
//   }else{
//     res.json(message)
//   }
// });

// // Implement a Root-Level Request Logger MiddlewarePassed
// app.use((req, res, next) => {
//   console.log(req.method + '' + req.path + '-' + req.ip);
// })

// --> 11) Mount the body-parser milddleware  hire 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse aplication/json 
app.use(bodyParser.json());

//Chain Middleware to Create a Time ServerPassed
// app.get("/now", (request, response, next) => {
//   request.time = new Date().toString();
//   next()
// }, (request, response) => {
//   response.json({'time': request.time})
//  })

// Get Route Parameter Input from the ClientPassed
// app.get("/:word/echo", (req, res) => {
//   const { word } = req.params;
//   res.json({
//     echo: word
//   });
// });


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

app.get("/name", function(req, res){
  res.json({name: req.query.first + " " + req.query.last});
  //console.log(req.query);

});



