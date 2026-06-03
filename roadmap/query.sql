-- INSERT INTO
-- 	ORDERS (STATUS, TOTAL, CREATED_AT)
-- VALUES
-- 	('done', 500, '2024-01-10'),
-- 	('done', NULL, '2024-01-12'),
-- 	('cancel', 200, '2024-02-01'),
-- 	('done', 300, '2024-02-15')

-- Dem don Done
-- SELECT COUNT(*) FROM orders WHERE status ILIkE 'done'

-- Dem don Done co total
-- SELECT COUNT(total) FROM orders WHERE status ILIkE 'done'

-- Dem don thang 2/2024
-- SELECT COUNT(*) 
-- FROM orders 
-- WHERE created_at >= '2024-02-01 00:00:00' 
--   AND created_at < '2024-03-01 00:00:00';

-- Tim don co total tu 300 den 500
-- SELECT COUNT(*) FROM orders WHERE total >= 300 AND total <=500

-- SELECT * FROM orders

-- CREATE TABLE ORDERS (
-- 	ID SERIAL PRIMARY KEY,
-- 	STATUS VARCHAR(20),
-- 	TOTAL NUMERIC(5),
-- 	CREATED_AT DATE
-- )