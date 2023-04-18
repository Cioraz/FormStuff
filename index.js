const express = require('express')
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('register');
})

app.get('/register',(req,res)=>{
    res.render('register');
})

app.get('/login',(req,res)=>{
    res.render('login');
})


app.listen(3000, () => {
  console.log('listening on port 3000')
})