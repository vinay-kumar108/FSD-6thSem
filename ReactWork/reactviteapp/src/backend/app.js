const express=require('express');
const cors=require('cors');
const fs=require('fs').promises
const app=express();
app.use(express.json());
app.use(cors());
const PORT=7878;


app.get("/",(req,res)=>{
res.send("<h2>Hi, Welcome to Express Server</h2>");
})

app.get("/msg",(req,res)=>{
res.json({msg:"this is /msg end point"});
})

app.post("/register",async (req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    console.log(name+email+password)
    let arr=[];
    // console.log(data);
      const data=await fs.readFile('./student.js',{encoding:'utf-8'})
        arr=JSON.parse(data);
        const status=arr.find(ele=>ele.email==email);
        if(status){
        return res.json({msg:'This email is already registered'})
        }
        else{
            arr.push({name,email,password});
           await fs.writeFile('./student.js',JSON.stringify(arr,null,2))
           return res.json({msg:'Registration done successfully!!!'});
        }
     
})

app.listen(PORT,()=>{
    console.log("Server is running on:"+PORT);
})