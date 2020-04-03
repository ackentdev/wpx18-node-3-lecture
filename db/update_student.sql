UPDATE students
SET email = $1
WHERE id = $2;

SELECT * FROM students;