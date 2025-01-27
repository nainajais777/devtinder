const express = require('express');
const app = express();

app.use("/admin",(req,res,next) =>
{
  const token ="xyz";
  const isregistered = token === "xyzu";
  if(!isregistered)
  {
    //res.send("authenticate user");
    res.status(401).send("unauthorize");
  }
  else
  {
    next();
  }
});
  app.get("/admin/getadmin",(req,res) =>
  {
      res.send("information send");
  });

app.listen(9000,() =>
{
console.log("connection successful");
});


/*const express = require('express');
const app = express();

// Middleware for authentication
app.use("/admin", (req, res, next) => {
  const token = "xyz";
  const isRegistered = token === "xyz";
  if (!isRegistered) {
    return res.status(401).send("Unauthorized");
  } else {
    next();
  }
});

// Route for /admin/getuser
app.get("/admin/getuser1", (req, res) => {
  res.send("Information sent");
});

// Route for /admin/getadmin
app.get("/admin/getadmin", (req, res) => {
  res.send("Information sent");
});

// Start the server
app.listen(9000, () => {
  console.log("Server running on http://localhost:9000");
});
*/