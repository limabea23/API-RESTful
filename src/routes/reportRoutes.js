const express = require("express");
const router = express.Router();

const reportController = require("./../controllers/reportController");

//Rota para gerar CSV
router.get("/report/csv", reportController.exportBrandCSV);
router.get("/report/csv", reportController.exportCosmeticCSV);

//Rota para o PDF
router.get("/report/pdf/brand", reportController.exportBrandPDF);
router.get("/report/pdf/cosmetic", reportController.exportCosmeticPDF);

module.exports = router;