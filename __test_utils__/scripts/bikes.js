const bikesSql = `-- Bikes (10 test data)
INSERT INTO bikes (id, msrp, category_id, brand, model, weight, suspension, travel, frame, fork, wheels, drive_train, groupset, brakes, seatpost) VALUES
(1, '$1,999.99', 1, 'Trek', 'Emonda', '18 lbs', 'Full suspension', '100 mm', 'Carbon fiber', 'Carbon fiber', 'Carbon fiber', 'Shimano Ultegra', 'Shimano Ultegra', 'Shimano Ultegra', 'Carbon fiber'),
(2, '$1,499.99', 2, 'Giant', 'Reign', '29 lbs', 'Full suspension', '160 mm', 'Aluminum', 'Aluminum', 'Aluminum', 'SRAM GX Eagle', 'SRAM GX Eagle', 'SRAM Guide R', 'Aluminum'),
(3, '$799.99', 3, 'Specialized', 'Sirrus', '26 lbs', 'Hardtail', 'N/A', 'Steel', 'Steel', 'Steel', 'Shimano Acera', 'Shimano Acera', 'Tektro Auriga', 'Steel'),
(4, '$2,499.99', 1, 'Cannondale', 'SuperSix', '16 lbs', 'Full suspension', '80 mm', 'Carbon fiber', 'Carbon fiber', 'Carbon fiber', 'Shimano Dura-Ace', 'Shimano Dura-Ace', 'Shimano Dura-Ace', 'Carbon fiber'),
(5, '$2,299.99', 2, 'Scott', 'Genius', '27 lbs', 'Full suspension', '150 mm', 'Aluminum', 'Aluminum', 'Aluminum', 'SRAM X01 Eagle', 'SRAM X01 Eagle', 'SRAM Guide RS', 'Aluminum'),
(6, '$1,799.99', 1, 'Giant', 'TCR', '19 lbs', 'Full suspension', '90 mm', 'Carbon fiber', 'Carbon fiber', 'Carbon fiber', 'Shimano 105', 'Shimano 105', 'Shimano 105', 'Carbon fiber'),
(7, '$699.99', 3, 'Trek', 'Dual Sport', '28 lbs', 'Hardtail', 'N/A', 'Steel', 'Steel', 'Steel', 'Shimano Alivio', 'Shimano Alivio', 'Tektro Auriga', 'Steel'),
(8, '$2,699.99', 2, 'Specialized', 'Stumpjumper', '30 lbs', 'Full suspension', '170 mm', 'Aluminum', 'Aluminum', 'Aluminum', 'SRAM GX Eagle', 'SRAM GX Eagle', 'SRAM Guide R', 'Aluminum'),
(9, '$2,699.99', 4, 'Specialized', 'Enduro', '31 lbs', 'Full suspension', '160 mm', 'Aluminum', 'Aluminum', 'Aluminum', 'SRAM X01 Eagle', 'SRAM X01 Eagle', 'SRAM Guide RS', 'Aluminum'),
(10, '$2,199.99', 5, 'Scott', 'Scale', '29 lbs', 'Hardtail', 'N/A', 'Carbon fiber', 'Carbon fiber', 'Carbon fiber', 'Shimano Dura-Ace', 'Shimano Dura-Ace', 'Shimano Dura-Ace', 'Carbon fiber');`

module.exports = bikesSql;