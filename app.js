const express = require ('express');
const { homedir } = require('os');
const path=require('path')
const app=express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000 ,()=>{
    console.log("levante el sv")
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})  

app.get("/register.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"
        ))
})

app.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"
        ))
})