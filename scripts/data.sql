-- Categories
INSERT INTO categories (name, type) VALUES
('Road', 'Road Bike'),
('Mountain', 'Mountain Bike'),
('Hybrid', 'Hybrid Bike');

INSERT INTO categories (name, type, parent_id) VALUES
('Trail', 'Mountain Bike', 2),
('Enduro', 'Mountain Bike', 2),
('Downhill', 'Mountain Bike', 2);

-- Additional categories
INSERT INTO categories (name, type) VALUES
('Touring', 'Road Bike'),
('Cyclocross', 'Road Bike'),
('Commuter', 'Hybrid Bike');

INSERT INTO categories (name, type, parent_id) VALUES
('Hardtail', 'Mountain Bike', 2),
('Full Suspension', 'Mountain Bike', 2);

-- Bikes
INSERT INTO bikes (msrp, category_id, brand, model, weight, suspension, travel, frame, fork, wheels, drive_train, groupset, brakes, seatpost) VALUES
('$1,999.99', 1, 'Trek', 'Emonda', '18 lbs', 'Full suspension', '100 mm', 'Carbon fiber', 'Carbon fiber', 'Carbon fiber', 'Shimano Ultegra', 'Shimano Ultegra', 'Shimano Ultegra', 'Carbon fiber'),
('$1,499.99', 2, 'Giant', 'Reign', '29 lbs', 'Full suspension', '160 mm', 'Aluminum', 'Aluminum', 'Aluminum', 'SRAM GX Eagle', 'SRAM GX Eagle', 'SRAM Guide R', 'Aluminum'),
('$799.99', 3, 'Specialized', 'Sirrus', '26 lbs', 'Hardtail', 'N/A', 'Steel', 'Steel', 'Steel', 'Shimano Acera', 'Shimano Acera', 'Tektro Auriga', 'Steel'),
('$2,499.99', 1, 'Cannondale', 'SuperSix', '16 lbs', 'Full suspension', '80 mm', 'Carbon fiber', 'Carbon fiber', 'Carbon fiber', 'Shimano Dura-Ace', 'Shimano Dura-Ace', 'Shimano Dura-Ace', 'Carbon fiber'),
('$2,299.99', 2, 'Scott', 'Genius', '27 lbs', 'Full suspension', '150 mm', 'Aluminum', 'Aluminum', 'Aluminum', 'SRAM X01 Eagle', 'SRAM X01 Eagle', 'SRAM Guide RS', 'Aluminum'),
('$1,799.99', 1, 'Giant', 'TCR', '19 lbs', 'Full suspension', '90 mm', 'Carbon fiber', 'Carbon fiber', 'Carbon fiber', 'Shimano 105', 'Shimano 105', 'Shimano 105', 'Carbon fiber'),
('$699.99', 3, 'Trek', 'Dual Sport', '28 lbs', 'Hardtail', 'N/A', 'Steel', 'Steel', 'Steel', 'Shimano Alivio', 'Shimano Alivio', 'Tektro Auriga', 'Steel'),
('$2,699.99', 2, 'Specialized', 'Stumpjumper', '30 lbs', 'Full suspension', '170 mm', 'Aluminum', 'Aluminum', 'Aluminum', 'SRAM GX Eagle', 'SRAM GX Eagle', 'SRAM Guide R', 'Aluminum')
('$1,799.99', 1, 'Specialized', 'Roubaix', '17 lbs', 'Full suspension', '80 mm', 'Carbon fiber', 'Carbon fiber', 'Carbon fiber', 'Shimano 105', 'Shimano 105', 'Shimano 105', 'Carbon fiber'),
('$1,799.99', 2, 'Trek', 'Fuel EX', '30 lbs', 'Full suspension', '140 mm', 'Aluminum', 'Aluminum', 'Aluminum', 'SRAM GX Eagle', 'SRAM GX Eagle', 'SRAM Guide R', 'Aluminum'),
('$799.99', 3, 'Cannondale', 'Quick', '26 lbs', 'Hardtail', 'N/A', 'Steel', 'Steel', 'Steel', 'Shimano Acera', 'Shimano Acera', 'Tektro Auriga', 'Steel'),
('$2,699.99', 4, 'Specialized', 'Enduro', '31 lbs', 'Full suspension', '160 mm', 'Aluminum', 'Aluminum', 'Aluminum', 'SRAM X01 Eagle', 'SRAM X01 Eagle', 'SRAM Guide RS', 'Aluminum'),
('$2,199.99', 5, 'Scott', 'Scale', '29 lbs', 'Hardtail', 'N/A', 'Carbon fiber', 'Carbon fiber', 'Carbon fiber', 'Shimano Dura-Ace', 'Shimano Dura-Ace', 'Shimano Dura-Ace', 'Carbon fiber');

-- Shops
INSERT INTO shops (name, location, phone_number, hours, services) VALUES
('John''s Bike Shop', '123 Main Street, Anytown USA', '555-555-5555', 'Monday-Friday: 10:00am-6:00pm, Saturday: 9:00am-5:00pm, Sunday: Closed', 'Bike Sales, Repairs, Tune-ups, Rentals'),
('Mike''s Bike Shop', '456 Main Street, Anytown USA', '555-555-5556', 'Monday-Friday: 9:00am-5:00pm, Saturday: 10:00am-4:00pm, Sunday: Closed', 'Bike Sales, Repairs, Rentals'),
('Sue''s Bike Shop', '789 Main Street, Anytown USA', '555-555-5557', 'Monday-Saturday: 10:00am-6:00pm, Sunday: Closed', 'Bike Sales, Repairs, Tune-ups, Rentals'),
('Chris''s Bike Shop', '321 Main Street, Anytown USA', '555-555-5558', 'Monday-Friday: 9:00am-5:00pm, Saturday: 9:00am-12:00pm, Sunday: Closed', 'Bike Sales, Repairs, Rentals'),
('Ann''s Bike Shop', '654 Main Street, Anytown USA', '555-555-5559', 'Monday-Saturday: 9:00am-5:00pm, Sunday: Closed', 'Bike Sales, Repairs, Tune-ups, Rentals');
