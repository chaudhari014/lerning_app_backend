const express=require("express")
const app=express()

app.use(express.json())

app.listen(7020,()=>{
    console.log("server start")
})