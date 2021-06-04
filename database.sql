import 'api.java','database.ts''src/app.ts',;
CREATE DATABASE employee_database;

CREATE TABLE employee{
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(255)
};
const query = `
INSERT INTO employee (employee_id, employee_name)
VALUES (1, 'john')
;


const query = `
SELECT *
FROM users
;