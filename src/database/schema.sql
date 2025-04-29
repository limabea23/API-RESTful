CREATE DATABASE apicosmetics;

\c apicosmetics;

CREATE TABLE brand (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    founder VARCHAR(100) NOT NULL
);

INSERT INTO brand (name, founder) VALUES 
('Natura', 'Antônio Luiz Seabra'),
('O Boticário', 'Miguel Krigsner'),
('Quem Disse, Berenice?', 'Grupo Boticário'),
('Maybelline', 'Thomas Lyle Williams'),
('MAC Cosmetics', 'Frank Toskan'),
('Fenty Beauty', 'Rihanna'),
('Kiko Milano', 'Antonio e Stefano Percassi');

CREATE TABLE cosmetic (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(7, 2),
    description TEXT,
    brand_id INTEGER REFERENCES brand(id) ON DELETE SET NULL
);

INSERT INTO cosmetic (name, category, price, description, brand_id) VALUES 
('Batom Matte', 'Maquiagem', 29.90, 'Batom com acabamento matte e longa duração.', 1), 
('Perfume Floratta', 'Perfumaria', 89.90, 'Perfume floral com notas suaves.', 2), 
('Base Líquida HD', 'Maquiagem', 45.50, 'Base líquida de alta cobertura.', 3),
('Máscara de Cílios Colossal', 'Maquiagem', 39.90, 'Máscara de cílios para volume extremo.', 4), 
('Pó Compacto Studio Fix', 'Maquiagem', 169.00, 'Pó compacto com acabamento profissional.', 5),
('Iluminador Killawatt', 'Maquiagem', 159.90, 'Iluminador de alta pigmentação.', 6), 
('Sombra Milano', 'Maquiagem', 49.90, 'Sombra com alta fixação e cores vibrantes.', 7); 