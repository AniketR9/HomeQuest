import express from "express";

const app=express();

app.use("/api/test",(req,res)=>{
    res.send("It works");
});

app.use("/api/auth/register",(req,res)=>{
    res.send("It works");
})

app.listen(8800,()=>{
    console.log("Server is running at port 8800");
})