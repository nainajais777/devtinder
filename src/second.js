const express =require('express');
const app = express();

app.get("/user",(req,res) =>
{
    res.send("firstname:naina");
});
app.post("/user",(req,res) =>
{
res.send("Post http is use to dave something into databse thus message Databse save successfully");
});
app.delete("/user",(req,res)=>
{
res.send("Information Deleted");
});
app.listen(9000,()=>
{
    console.log("server listening");
});