const authadmin =(req,res,next) =>
    {
      const token ="xyz";
      const isregistered = token === "xyz";
      if(!isregistered)
      {
        //res.send("authenticate user");
        res.status(401).send("unauthorize");
      }
      else
      {
        next();
      }
    };
      module.exports = {
        authadmin,
      };