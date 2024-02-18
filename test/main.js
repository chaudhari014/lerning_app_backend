const fs=require("fs")

const stream=fs.createReadStream("../index.js")

stream.on("data",(chunk)=>{
    console.log(chunk.toString())
})
stream.on("end",()=>{
    console.log("end ")
})

console.log("rahul")
setTimeout(()=>{
    console.log("rahul2")
},1)