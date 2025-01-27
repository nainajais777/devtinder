//middleware is made which is used in fifth.js

const express = require('express');
const app = express();
const {authadmin}= require("./middleware/auth");
app.use("/admin",authadmin);
  app.get("/admin/getadmin",(req,res) =>
  {
      res.send("information send used middlewares in seperate folder");
  });

app.listen(9000,() =>
{
console.log("connection successful");
});
