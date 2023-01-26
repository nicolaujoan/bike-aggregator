const availabilitySql = `-- Availability
INSERT INTO availability (shop_id, bike_id, in_stock) values
(1, 1, 5), (1, 2, 4), (2, 3, 3), (1, 7, 3), (5, 4, 3), (3, 2, 1), (3, 3, 3), (4, 10, 2), (5, 2, 2), (2, 8, 7);`

module.exports = availabilitySql;