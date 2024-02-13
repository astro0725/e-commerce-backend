-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- Drop existing tables if they exist to avoid conflicts
DROP TABLE IF EXISTS product_tag;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS category;

-- Create category table
CREATE TABLE category (
    categoryId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (categoryId)
);

-- Create product table
CREATE TABLE product (
    productId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    PRIMARY KEY (productId)
);

-- Create tag table
CREATE TABLE tag (
    tagId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (tagId)
);

-- Create product_tag table
CREATE TABLE product_tag (
    productTagId INT NOT NULL AUTO_INCREMENT,
    productId INT NOT NULL,
    tagId INT NOT NULL,
    PRIMARY KEY (productTagId),
    FOREIGN KEY (productId) REFERENCES product(productId),
    FOREIGN KEY (tagId) REFERENCES tag(tagId)
);
