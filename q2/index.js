const express= require("express");
const app=express();
const path= require('path');
const bodyParser=require("body-parser");
//configuration
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const qs = require('querystring');// used to parse the request body to object. and the object then attached to req.body property
app.get("/",(req,res)=>{
  res.render('index');
})


app.use('/response', (req, res) => {// handling the post request using post.

  let name = req.body.name;
  let age = req.body.age;

   res.render('index',{
      name:name,
      age:age,
     })   
});


/*app.use("/response",(req, res, next) => {// handling post request using middleware
  if (req.method === 'post' && req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
     next();
    });
    req.on('end', () => {
      req.body = qs.parse(body);
      next();
    });
  } else {
    next();
  }
 
  if (req.body) {
    const name = req.body.name;
    const age = req.body.age;

     res.render('index',{
      name:name,
      age:age,
     })   
    //res.send(`Hello, ${name}! You are ${age} years old.`);
    //console.log(req.body);
    //res.send(`Hello ${req.body.name} ...look like you are ${req.body.age}`);
  } else {
    res.send('No data received');
  }

});*/

app.listen(3000,()=>{
  console.log("our server is working..")
})