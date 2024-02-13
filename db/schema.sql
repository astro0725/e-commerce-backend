-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- Drop tables if they exist to avoid conflicts
DROP TABLE IF EXISTS product_tag;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS tag;

-- Create category table
CREATE TABLE category (
    categoryId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (categoryId)
);

-- Create product table with a foreign key to category
CREATE TABLE product (
    productId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    categoryId INT,
    PRIMARY KEY (productId),
    FOREIGN KEY (categoryId) REFERENCES category(categoryId)
);

-- Create tag table
CREATE TABLE tag (
    tagId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (tagId)
);

-- Create product_tag junction table for many-to-many relationship between product and tag
CREATE TABLE product_tag (
    productTagId INT NOT NULL AUTO_INCREMENT,
    productId INT NOT NULL,
    tagId INT NOT NULL,
    PRIMARY KEY (productTagId),
    FOREIGN KEY (productId) REFERENCES product(productId),
    FOREIGN KEY (tagId) REFERENCES tag(tagId)
);
