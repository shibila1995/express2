var express=require('express')
var app=express()
app.get('/',(req,res)=>{
    res.send("home")
})
app.get('/home',(req,res)=>{
res.send("my home")
})
app.get('/contact',(req,res)=>{
    res.send("welcome")
})
app.listen(3008,()=>{
    console.log("server started")
})