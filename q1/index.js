const express=require('express');
const path= require('path');
const app =express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'view'));
//app.set('csss',path.join(__dirname, 'css'));
app.use(express.static(path.join(__dirname, 'css')));



app.get('/',(req,res)=>{
 let currentTime= new Date().getHours();

 let cssFile = "";
if (currentTime >= 6 && currentTime < 18) {
  cssFile = "/day.css";
} else {
  cssFile = "/night.css";
}

 res.render("index",{
 cssFile:cssFile,
 });
});

app.listen(3000,()=>{
console.log("Server is working");
})

/*
  const currentTime = new Date().getHours();
  const linkTag = currentTime >= 6 && currentTime < 18
    ? '<link rel="stylesheet" href="/day.css">'
    : '<link rel="stylesheet" href="/night.css">';

    app.use(express.static(path.join(__dirname, 'css')));
*/