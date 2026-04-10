CREATE TABLE IF NOT EXISTS cars (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    description TEXT,
    image_url VARCHAR(1000)
);

TRUNCATE TABLE cars RESTART IDENTITY;

INSERT INTO cars (title, year, description, image_url) VALUES
('Buggatti Veyron', 2005, 'The Bugatti Veyron is a high-performance sports car produced by the French automaker Bugatti from 2005 to 2015.', '/img/Buggati.jpg'),
('Mclaren Senna', 2018, 'The McLaren Senna is a high-performance sports car produced by McLaren.', '/img/mclaren.webp'),
('Lamborghini Huracan', 2014, 'The Lamborghini Huracan is an italian sports car produced by Lamborghini.', '/img/lamborghini.webp'),
('Dababy Car', 2020, 'Its the dababy car', '/img/dababy.webp' ),
('Lada', 1960, 'The lada is everyones dream car', '/img/lada.webp');



