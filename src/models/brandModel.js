const pool = require("../config/database");

const getAllBrands = async (name) => {
    if(!name) {
        const result = await pool.query(`SELECT * FROM brand`);
        return result.rows;
    } else {
        const result = await pool.query(`SELECT * FROM brand WHERE name ILIKE $1`, [`%${name}%`]);
        return result.rows;
    }
};

const getBrandById = async (id) => {
    const result = await pool.query("SELECT * FROM brand WHERE id = $1", [id]);
    return result.rows[0];
};

const createBrand = async (name, founder, photo) => {
    const result = await pool.query(
        "INSERT INTO brand (name, founder, photo) VALUES ($1, $2, $3) RETURNING *",
        [name, founder, photo]
    );
    return result.rows[0];
};

const updateBrand = async (id, name, founder) => {
    const result = await pool.query(
        "UPDATE brand SET name = $1, founder = $2 WHERE id = $3 RETURNING *",
        [name, founder, id]
    );
    return result.rows[0];
};

const deleteBrand = async (id) => {
    const result = await pool.query("DELETE FROM brand WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "marca não encontrada." };
    }

    return { message: "marca deletada com sucesso." };
};

module.exports = { getAllBrands, getBrandById, createBrand, updateBrand, deleteBrand };