const express=require('express');
const app=express();

app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.send('hello G23')
});

app.get('/hello',(req,res)=>{
    // res.send('hello raghav')
    res.render('hello.ejs');
});

app.listen(3000,()=>{
    console.log('server is running on port 3000')
});