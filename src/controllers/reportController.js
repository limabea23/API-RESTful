const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");

const cosmeticModel = require("../models/cosmeticModel");

const exportCosmeticCSV = async (req, res) => {
    try {
        const cosmetics =  await cosmeticModel.getCosmetic();

        res.setHeader("Content-Disposition", "attachment; filename=cosmetic.csv");
        res.setHeader("Content-Type", "text-csv");

        const csvStream = format({ headers: true});
        csvStream.pipe(res);

        cosmetics.forEach((cosmetic) => {
            csvStream.write({
                Nome: cosmetic.name,
                Categoria: cosmetic.category,
                Preço: cosmetic.price,
                Descrição: cosmetic.descripiton,
                Marca: cosmetic.brand_id
            });
        });
        
        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "erro ao gerar o CSV"});
    }
};

const exportCosmeticPDF = async (req, res) => {
    try {
        const cosmetic =  await cosmeticModel.getCosmetic();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=cosmetic.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatório de Cosméticos", {align: "center"});
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Nome | Categoria | Preço | Descrição | Marca", {underline: true});
        doc.moveDown(0.5);

        //Add dados dos cosméticos
        cosmetic.forEach((cosmetic) => {
            doc.text(
                `${cosmetic.name} | ${cosmetic.category} | ${cosmetic.price} | ${cosmetic.description} | ${cosmetic.brand_id}`
            );
        });

        doc.end();
    }  catch (error) {
    res.status(500).json({ message: "erro ao gerar o PDF"}); 
    }
};

module.exports = {  exportCosmeticCSV, exportCosmeticPDF};