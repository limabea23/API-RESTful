const brandModel = require("../models/brandModel");

const getAllBrands = async (req, res) => {
    try {
            const { name } = req.query;
            const brands = await brandModel.getAllBrands(name);
            res.json(brands);
        } catch (error) { 
            res.status(500).json({ message: "erro ao buscar cosmético." });
        }
};

const getBrand = async (req, res) => {
    try {
        const brand = await brandModel.getBrandById(req.params.id);
        if (!brand) {
            return res.status(404).json({ message: "marca não encontrada." });
        }
        res.json(brand);
    } catch (error) {
        res.status(500).json({ message: "erro ao buscar marca." });
    }
};

const createBrand = async (req, res) => {
    try {
        const { name, founder } = req.body;
        const newBrand = await brandModel.createBrand(name, founder);
        res.status(201).json(newBrand);
    } catch (error) {
	console.log(error);
        if (error.code === "23505") { // Código de erro do PostgreSQL para chave única violada
            return res.status(400).json({ message: "marca já cadastrada." });
        }
        res.status(500).json({ message: "erro ao criar marca." });
    }
};

const updateBrand = async (req, res) => {
    try {
        const { name, founder } = req.body;
        const updatedBrand = await brandModel.updateBrand(req.params.id, name, founder);
        if (!updatedBrand) {
            return res.status(404).json({ message: "marca não encontrada." });
        }
        res.json(updatedBrand);
    } catch (error) {
        res.status(500).json({ message: "erro ao atualizar marca." });
    }
};

const deleteBrand = async (req, res) => {
    try {
        const message = await brandModel.deleteBrand(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "erro ao deletar marca." });
    }
};

module.exports = { getAllBrands, getBrand, createBrand, updateBrand, deleteBrand }