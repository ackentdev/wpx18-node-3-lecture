CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email VARCHAR(32)
);

INSERT INTO students ( name, email )
VALUES
('Nitin', 'wowfan@blizzard.com'),
('Riley', 'rhatch@animal.crossing.gov'),
('Kayla', 'kayla@pokemon.go');

SELECT * FROM students;