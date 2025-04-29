const pool = require("../config/database");

const getAllCosmetics = async () => {
    const result = await pool.query(
        `SELECT cosmetic.*, brand.name AS brand_name 
        FROM cosmetic 
        LEFT JOIN brand ON Cosmetics.brand_id = brand.id`
    );
    return result.rows;
};

const getCosmeticById = async (id) => {
    const result = await pool.query(
        `SELECT cosmetic.*, brand.name AS brand_name 
        FROM cosmetic 
        LEFT JOIN brand ON cosmetic.brand_id = brand.id 
        WHERE cosmetic.id = $1`,
    [id]
);
    return result.rows[0];
};

const createCosmetic = async (name, category, price, description, brand_id) => {
    const result = await pool.query(
    "INSERT INTO cosmetic (name, category, price, description, brand_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, category, price, description, brand_id]
);
    return result.rows[0];
};

const updateCosmetic = async (id, name, category, price, description, brand_id) => {
    const result = await pool.query(
    "UPDATE cosmetic SET name = $1, category = $2, price = $3, description = $4 brand_id = $5 WHERE id = $6 RETURNING *",
    [name, category, price, description, brand_id, id]
);
return result.rows[0];
};

const deleteCosmetic = async (id) => {
    const result = await pool.query(
    "DELETE FROM cosmetic WHERE id = $1 RETURNING *",
    [id]
);

    if (result.rowCount === 0) {
    return { error: "cosmético não encontrado." };
}

    return { message: "cosmético deletado com sucesso." };
};

module.exports = { getAllCosmetics, getCosmeticById, createCosmetic, updateCosmetic, deleteCosmetic };
