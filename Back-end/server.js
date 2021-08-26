/**
 *       Brand Car API
 *       by Brice Morgat
 */
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(express.json());

const db = require("./models");

db.sequelize.sync();

require("./routes/brandcars.routes.js")(app);

app.listen(PORT, () => {
  console.log(`Server run`);
});
