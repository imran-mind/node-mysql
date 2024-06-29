CREATE DATABASE task_app;

CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    is_done BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO tasks (task_name, is_done, created_at, updated_at) VALUES
    ('Task 1', FALSE, NOW(), NOW()),
    ('Task 2', TRUE, NOW(), NOW()),
    ('Task 3', FALSE, NOW(), NOW());
