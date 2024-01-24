// import express module
const express = require('express')

// This line creates an instance of an Express application
const app = express()

// listening on this port
const PORT = 3000

// specifying our first route
// by default backend will show this route
app.get('/',function(req,res){
		// "send" is a method to send a response
    // back to the client with the specified content
    res.send("Hello World");
})

app.get('/about',function(req,res){
		// "send" is a method to send a response
    // back to the client with the specified content
    res.send("This is about page");
})

app.get('/contact',function(req,res){
		// "send" is a method to send a response
    // back to the client with the specified content
    res.send("This is contact page");
})

// server will listen to the port
app.listen(PORT,function(req,res){
    console.log(`Server is running on http://localhost:${PORT}`)
})