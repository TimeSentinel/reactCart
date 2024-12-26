-- Load required elements:
INSERT INTO products.keywords.types(keyTypeName)
VALUES('Culture'),
      ('Diet'),
      ('Taste');

INSERT INTO products.keywords.defs(keyName, keyDesc, keyType)
VALUES('alcohol', 'Contains alcohol.', 'Diet'),
      ('allergen','Contains commonly known allergens (ie. peanuts, shellfish).', 'Diet'),
      ('meat','Contains animal proteins.', 'Diet'),
      ('fish','Contains protein primarily from fish/seafood.', 'Diet'),
      ('vegetarian','Mostly plant-based proteins or has vegetarian options. May contain dairy, honey, and/or egg products', 'Diet'),
      ('vegan','Vegan or vegan options. Entirely plant-based. No animal products.', 'Diet'),
      ('dairy','Contains dairy based ingredients.', 'Diet'),
      ('low-carb','Low-carb meal option.', 'Diet'),
      ('low-fat','This product is low in fat.', 'Diet'),
      ('gluten free','Does NOT contain gluten ingredients or has gluten-free options.', 'Diet'),
      ('sweet','Has more of a sweet taste.', 'Taste'),
      ('savory','Balanced salty and sweet flavor.', 'Taste'),
      ('spicy','Maybe a little spicy or has spicy options.', 'Taste'),
      ('hot','Considered hot by most or has very spicy options.', 'Taste'),
      ('American','American origin or style.)', 'Culture'),
      ('Asian','Asian origin or style.)', 'Culture'),
      ('European','European origin or style.)', 'Culture'),
      ('Mexican','Mexican origin or style.)', 'Culture'),
      ('Chinese','Chinese origin or style.)', 'Culture'),
      ('Indian','Indian origin or style.)', 'Culture'),
      ('Italian','Italian origin or style.)', 'Culture'),
      ('Greek','Greek origin or style.)', 'Culture'),
      ('French','French origin or style.)', 'Culture'),
      ('Middle Eastern','Middle Eastern origin or style.)', 'Culture');


INSERT INTO products.categories.defs(catID, catName, catDesc, catAvail)
VALUES(1, 'Breakfast', 'First meal.', 'Opening until noon.'),
     (2, 'Lunch', 'Middle meal.', '10am until 5pm, daily.'),
     (3, 'Dinner', 'Evening meal.', '4pm until close.'),
     (4, 'Dessert', 'Sweet Finale.', 'Any time of day!'),
     (5, 'Beverages', 'Something to drink?.', 'All day long.');

INSERT INTO products.categories.subcats(subcatName, fkCategory)
    VALUES ('Meals',1),
            ('Omelets',1),
            ('Sandwiches',1),
            ('Sides',1),
            ('Sandwiches',2),
            ('Tacos',2),
            ('Burritos',2),
            ('Soups',2),
            ('Salads',2),
            ('Entrees',3),
            ('Light Meals',3),
            ('A La Carte',3),
            ('Sinful',4),
            ('Sugar-Free',4),
           ('Wines',5),
           ('Juices',5),
           ('Soft Drinks',5),
           ('Dairy',5);

INSERT INTO products.options.defaults(defaultValue)
VALUES ('Selected'),
       ('');

INSERT INTO products.options.types(optTypeValue)
VALUES ('Checkbox'),
       ('Radio'),
       ('Text');

-- Load optional demonstration data:
INSERT INTO products.options.defs(optID, optName, optType, optDesc)
VALUES (0, 'Sandwich Toppings', '', ''),

INSERT INTO products.options.items(optItemID, optItemName, optItemDefault, optCost)
VALUES (1,'','',0),s

INSERT INTO products.list(productID, productName, productShort, productDesc,
                          productPrice, productImage, productCategory, productSubCategory)
VALUES (0,'','','',0,'',0,0),

INSERT INTO products.keywords(keyID, productID)
VALUES (0,0),

INSERT INTO products.options(optID, productID)
VALUES (0,0),