# E-Commerce Back End
A RESTful API built with Express.js and Sequelize to manage categories, products, and tags in an e-commerce platform through a MySQL database.

## Table of Contents
- [Description](#Description)
- [Features](#Features)
- [Technologies](#Technologies)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)

## Description
The E-Commerce Back End is a RESTful API built for an e-commerce site that uses Express.js and Sequelize to interact with a MySQL database. This project serves as the back-end infrastructure, handling database management for categories, products, tags, and their relationships. By utilizing Sequelize ORM, this application provides full CRUD functionality (Create, Read, Update, Delete) for managing these entities, allowing businesses to manage products efficiently.

This application is designed for developers or business owners looking to manage their e-commerce database directly and programmatically.

## Technologies
- Node.js
- Express.js
- MySQL2
- Sequelize ORM
- dotenv for environment variables
- JavaScript

## Installation
- Clone the repository:
`git clone https://github.com/astro0725/e-commerce-backend.git`
- Navigate to the project directory:
`cd e-commerce-backend`
- Install the necessary dependencies:
`npm install`
- Create a .env file in the root directory and add the following environment variables (with your own MySQL credentials):
```
DB_NAME='ecommerce_db'
DB_USER='your-mysql-username'
DB_PW='your-mysql-password'
Log in to MySQL and create the database:
```
- Log in to MySQL and create the database:
```
mysql -u root -p
SOURCE db/schema.sql;
```
- Start the server and sync the Sequelize models:
`npm start`

## Usage
Once the server is running, you can interact with the API using tools like Insomnia or Postman to test the routes.
The API has full CRUD operations for Categories, Products, and Tags.

### Example Requests
- GET all categories, products, or tags.
- POST to create a new category, product, or tag.
- PUT to update a category, product, or tag.
- DELETE to remove a category, product, or tag.

## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) <br/>
This project is licensed under the MIT license. For more details, see [this link](https://opensource.org/licenses/MIT).
