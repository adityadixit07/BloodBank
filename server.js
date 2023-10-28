const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./config/db");
dotenv.config({ path: "./config/config.env" });
const app = express();
db();

app.use(cors());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); //ye btayega ki konsi request aayi hai

const PORT = process.env.PORT || 8080;

// routes
// user routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
// inventory routes
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
