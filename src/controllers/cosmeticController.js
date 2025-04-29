const cosmeticModel = require("../models/cosmeticModel");

const getAllCosmetics = async (req, res) => {
    try {
        const { name } = req.query;
        const cosmetics = await cosmeticModel.getAllCosmetic(name);
        res.json(cosmetics);
    } catch (error) { 
        res.status(500).json({ message: "erro ao buscar cosmético." });
    }
};

const getCosmetic = async (req, res) => {
    try {
        const cosmetics = await cosmeticModel.getCosmeticsById(req.params.id);
        if (!cosmetics) {
            return res.status(404).json({ message: "cosmético não encontrado." });
        }
        res.json(cosmetics);
    } catch (error) {
        res.status(500).json({ message: "erro ao buscar cosmético." });
    }
};

const createCosmetic = async (req, res) => {
    try {
        const { name, category, price, description, brand_id } = req.body;
        const newcosmetic = await cosmeticModel.createCosmetic(name, category, price, description, brand_id);
        res.status(201).json(newcosmetic);
    } catch (error) {
        res.status(500).json({ message: "erro ao criar cosmético." });
    }
};

const updateCosmetic = async (req, res) => {
    try {
        const { name, category, price, description, brand_id } = req.body;
        const updatedCosmetic = await cosmeticModel.updateCosmetic(req.params.id, name, category, price, description, brand_id);
        if (!updatedCosmetic) {
            return res.status(404).json({ message: "cosmético não encontrado." });
        }
        res.json(updatedCosmetic);
    } catch (error) {
        res.status(500).json({ message: "erro ao atualizar cosmético." });
    }
};

const deleteCosmetic = async (req, res) => {
    try {
        const message = await cosmeticModel.deleteCosmetic(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "erro ao deletar cosmético." });
    }
};

module.exports = { getAllCosmetics, getCosmetic, createCosmetic, updateCosmetic, deleteCosmetic };