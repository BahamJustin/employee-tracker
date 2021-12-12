INSERT INTO department
    (name)
VALUES
    ('IT'),
    ('HR'),
    ('Accounting');

INSERT INTO roles
    (id, title, salary, department_id)
VALUES
    (1, 'Technician', '100000', 1),
    (2, "Tech Intern", "50000", 1 ),
    (3, 'HR Lead', '100000', 2),
    (4, 'HR Assistant', '50000', 2),
    (5, 'Accountant', '100000', 3),
    (6, 'Accounting Assistant', '50000', 3);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Smith', 1, NULL),
    ('Lamar', 'Jackson', 2, 1),
    ('Padme', 'Amidala', 2, 1),
    ('Kanye', 'West', 3, NULL),
    ('Brandon', 'Boyd', 4, 4),
    ('Andre', '3000', 4, 4),
    ('Pharrell', 'Williams', 5, NULL),
    ('Young', 'Nudy', 6, 7),
    ('Zack', 'Fox', 6, 7);