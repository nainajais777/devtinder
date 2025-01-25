const express = require('express');
const app = express();

app.use((req,res,next) =>
{
console.log("Response from server");
next();
});
app.use('/',(req,res) =>
{
res.send("message send");
});
app.listen(9000 , ()=>
    {
 console.log("successfully created");
    });