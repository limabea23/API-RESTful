const express = require("express");
const router = express.Router();
const cosmeticController = require("../controllers/cosmeticController");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);
router.get("/cosmetics", cosmeticController.getAllCosmetics);
router.get("/cosmetics/:id", cosmeticController.getCosmetic);
router.post("/cosmetics", cosmeticController.createCosmetic);
router.put("/cosmetics/:id", cosmeticController.updateCosmetic);
router.delete("/cosmetics/:id", cosmeticController.deleteCosmetic);

module.exports = router;