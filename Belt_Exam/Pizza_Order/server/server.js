const express = require("express");
const cors = require('cors')
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())

const AllMyPizzaRoutes = require("./routes/pizza.routes");
AllMyPizzaRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
