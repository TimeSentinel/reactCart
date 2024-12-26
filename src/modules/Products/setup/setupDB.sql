CREATE SCHEMA products2025;

-- Categories ------------------------++++++++++++++++
CREATE TABLE IF NOT EXISTS products.categories.defs (
    catID int NOT NULL,
    catName varchar(255) NOT NULL,
    catDesc varchar(255),
    catAvail varchar(255),
    PRIMARY KEY(catID)
);

CREATE TABLE IF NOT EXISTS products.categories.subcats (
    subcatName varchar(255) NOT NULL,
    CONSTRAINT fkCategory
        FOREIGN KEY(catID)
        REFERENCES products.categories.defs(catID)
        ON DELETE CASCADE
);

-- KEYWORDS ------------------------++++++++++++++++
CREATE TABLE IF NOT EXISTS products.keywords.types (
    keyTypeName varchar(16) NOT NULL
);

CREATE TABLE IF NOT EXISTS products.keywords.defs (
    keyID int NOT NULL AUTO_INCREMENT,
    keyName varchar(255) NOT NULL,
    keyDesc varchar(255),
    keyType varchar(16) REFERENCES products.keywords.types(keyTypeName)
    PRIMARY KEY(keyID)
);

-- OPTIONS ------------------------++++++++++++++++
CREATE TABLE IF NOT EXISTS products.options.defaults (
    defaultValue varchar(16)
);

CREATE TABLE IF NOT EXISTS products.options.types (
    optTypeValue varchar(16)
);

CREATE TABLE IF NOT EXISTS products.options.defs (
    optValue varchar(255) NOT NULL,
    optType varchar(16) REFERENCES products.options.types (optTypeValue),
    optDesc varchar(255),
    UNIQUE(optValue)
);

CREATE TABLE IF NOT EXISTS products.options.items (
    optItemValue varchar(255) REFERENCES products.options.defs(optValue),
    optItemName varchar(255) NOT NULL,
    optItemDefault varchar(16) REFERENCES products.options.defaults(defaultValue),
    optCost numeric(5, 2)
);

-- PRODUCT LIST/CATALOG ------------------++++++++++++++++
CREATE TABLE IF NOT EXISTS products.list (
    productKey int NOT NULL AUTO_INCREMENT,
    productID UUID NOT NULL,
    productName varchar(255),
    productShort varchar(255),
    productDesc text,
    productPrice numeric(5,2),
    productImage varchar(255),
    productCategory int REFERENCES products.categories.defs(catID),
    productSubCategory int REFERENCES products.categories.subcats(subID),
    PRIMARY KEY(productKey),
    UNIQUE(productID)
 --   keywords ,
 --   options ,
);

CREATE TABLE IF NOT EXISTS products.keywords (
    keyID int REFERENCES products.keywords.defs(keyID),
    productID int REFERENCES products.list(productID)
);

CREATE TABLE IF NOT EXISTS products.options (
    optID int REFERENCES products.options.defs(optID),
    productID int REFERENCES products.list(productID)
);

