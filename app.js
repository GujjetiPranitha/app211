const express=require('express')
const app=express()
var cors=require('cors')
const port=process.env.PORT || 3001
//we use app for if there is any environment variable port or the other port
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/health",(req,res){
    console.log("Server OK")
})
app.listen(port,function(req,res){
    console.log("Server started")
})