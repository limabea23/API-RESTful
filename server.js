require("dotenv").config();
const express = require("express");
const cors = require("cors");
const brandRoutes = require("./src/routes/brandRoutes.js");
const cosmeticRoutes = require("./src/routes/cosmetic.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", brandRoutes); 
app.use("/api", cosmeticRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Suuucessoooo, servidor rodando na porta ${PORT} 💗🌟🤠💋`);
});