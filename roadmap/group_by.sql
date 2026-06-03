-- Đếm số nhân viên theo phòng ban
SELECT
	COUNT(*)
FROM
	EMPLOYEES
GROUP BY
	DEPARTMENT;

-- Tính lương trung bình mỗi phòng ban
SELECT
	AVG(SALARY)
FROM
	EMPLOYEES
GROUP BY
	DEPARTMENT;

-- Chỉ lấy phòng ban có >= 2 nhân viên
SELECT
	COUNT(*) AS TOTAL
FROM
	EMPLOYEES
GROUP BY
	DEPARTMENT
HAVING
	COUNT(*) >= 2;

-- Sắp xếp phòng ban theo lương trung bình giảm dần
SELECT
	DEPARTMENT
FROM
	EMPLOYEES
GROUP BY
	DEPARTMENT
ORDER BY
	AVG(SALARY) DESC
	-- CREATE TABLE employees (
	--     id INT PRIMARY KEY,
	--     department VARCHAR(50) NOT NULL,
	--     salary INT
	-- );
	-- INSERT INTO employees (id, department, salary)
	-- VALUES 
	--     (1, 'IT', 1000),
	--     (2, 'IT', NULL),
	--     (3, 'HR', 900),
	--     (4, 'HR', 900),
	--     (5, 'HR', 1200);