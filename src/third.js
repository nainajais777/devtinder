//learn route handlers and middleware
const express = require('express');
const app = express();

app.get('/handle',(req,res,next) =>
{
//res.send("first response");
next();
},
(req,res) =>
{
res.send("second response");
});

app.listen(9000, () =>
{
console.log("listening properly");
});