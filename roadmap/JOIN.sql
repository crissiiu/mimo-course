-- Lấy tên customer + amount
SELECT
	NAME,
	AMOUNT
FROM
	CUSTOMERS C
	INNER JOIN INVOICES I ON C.ID = I.CUSTOMER_ID;

-- Lấy tất cả customer, kể cả chưa có invoice
SELECT
	NAME,
	AMOUNT
FROM
	CUSTOMERS C
	LEFT JOIN INVOICES I ON C.ID = I.CUSTOMER_ID;

-- Đếm số invoice mỗi customer
SELECT
	C.NAME,
	COUNT(I.CUSTOMER_ID) AS NUM
FROM
	CUSTOMERS C
	LEFT JOIN INVOICES I ON C.ID = I.CUSTOMER_ID
GROUP BY
	C.NAME
ORDER BY
	NUM DESC;

-- Tổng tiền mỗi customer (customer chưa có → 0)
SELECT
	C.NAME,
	SUM(COALESCE(I.AMOUNT, 0)) AS TOTAL
FROM
	CUSTOMERS C
	LEFT JOIN INVOICES I ON C.ID = I.CUSTOMER_ID
GROUP BY
	C.NAME
ORDER BY
	TOTAL DESC;

-- -- 1. Thêm dữ liệu vào bảng customers
-- INSERT INTO customers (id, name)
-- VALUES 
--     (1, 'A'),
--     (2, 'B'),
--     (3, 'C');
-- -- 2. Thêm dữ liệu vào bảng invoices
-- INSERT INTO invoices (id, customer_id, amount)
-- VALUES 
--     (1, 1, 100),
--     (2, 1, 200),
--     (3, 2, 300);
-- -- -- 1. Tạo bảng khách hàng
-- -- CREATE TABLE customers (
-- --     id INT PRIMARY KEY,
-- --     name VARCHAR(50) NOT NULL
-- -- );
-- -- -- 2. Tạo bảng hóa đơn
-- -- CREATE TABLE invoices (
-- --     id INT PRIMARY KEY,
-- --     customer_id INT,
-- --     amount INT,
-- --     -- Tạo mối liên kết giữa 2 bảng
-- --     CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers(id)
-- -- );