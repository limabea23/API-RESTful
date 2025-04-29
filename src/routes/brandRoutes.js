const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brandController");

router.get("/brands", brandController.getAllBrands);
router.get("/brands/:id", brandController.getBrand);
router.post("/brands", brandController.createBrand);
router.put("/brands/:id", brandController.updateBrand);
router.delete("/brands/:id", brandController.deleteBrand);

module.exports = router;