const express=require("express")
const app = express();

const PORT=8080;

app.get("/getid",(req,res)=>{
   var id = req.query.id;
   res.send("Current user id is : "+id)

})

app.listen(PORT,()=>{
    console.log("Server running on port:8080");
})