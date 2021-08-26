module.exports = app => {
    const brandcars = require("../controllers/brandcars.controller.js");
  
    var router = require("express").Router();
  
    router.post("/add", brandcars.create);
  
    router.get("/all", brandcars.findAll);
  
    router.get("/find/:id", brandcars.findOne);
  
    router.put("/update/:id", brandcars.update);
  
    router.delete("/delete/:id", brandcars.delete);
  
    app.use('/api/brandcars', router);
  };