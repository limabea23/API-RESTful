require("dotenv").config();
const express = require("express");
const cors = require("cors");
const brandRoutes = require("./src/routes/brandRoutes.js");
const cosmeticRoutes = require("./src/routes/cosmeticRoutes.js");
const reportRoutes = require("./src/routes/reportRoutes.js");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", brandRoutes); 
app.use("/api", cosmeticRoutes); 
app.use("/api", reportRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Suuucessoooo, servidor rodando na porta ${PORT} 💗🌟🤠💋`);
});