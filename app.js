let express = require ('express');

let app = express()

app.listen(3000)

app.get('/hello',(request, response)=>{
    response.send('hello express')

});

app.get("/", function(req, res) 
{ res.send('Hello Express'); });

