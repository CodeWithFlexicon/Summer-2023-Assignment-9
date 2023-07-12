# Recipe Management System

This assignment is an API for managing a recipe management system. It allows users to perform CRUD (Create, Read, Update, Delete) operations on recipe data using Node.js, Express.js, PostgreSQL, and Sequelize.
Validation from Sequelize is implemented to make sure the user does not exceed text/string limits.

## PostgreSQL

PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

## Sequelize

Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. It supports the Node.js environment and uses JavaScript.

## Installation

To test the API, follow these steps:

1. Download the code as a zip file and extract it to a folder of your choice.
2. Open a terminal or command prompt and navigate to the project folder.
3. Run the following command to install the required dependencies:
   ```
   npm install
   ```
4. Make sure you have PostgreSQL installed. You will also find it useful to have the PostgreSQL Explorer extension installed in VSCode.
5. Configure the PostgreSQL database connection settings in an `.env` file. Here is an example `.env` file:
  ```
  DB_USER=your_user_from_postgresql
  DB_HOST=localhost
  DB_NAME=your_database_from_postgresql
  DB_PASSWORD=your_password_for_your_user
  DB_PORT=port_of_your_choice
  ``` 
6. Run the following command to start the server:
   ```
   npm start
   ```
7. The API should now be running locally on `http://localhost:4000` or the port of your choice.

## Features

- **Retrieve All Recipes**: Get a list of all recipes from the database using the GET operation.
- **Retrieve Specific Recipe**: Retrieve a specific recipe by ID from the database using a GET operation.
- **Add New Recipe**: Add a new recipe to the database using the POST operation.
- **Update Recipe**: Update a recipe by ID in the database using the PATCH operation.
- **Delete Recipe**: Delete a recipe by ID from the database using the DELETE operation.
- **SQL Queries**: Utilizes SQL queries to interact with the PostgreSQL database and perform the necessary CRUD operations.
- **Sequelize Validation**: Utilizes Sequelize built-in validation to ensure that database rules are followed. e.g title too short, description too lengthy...

## Testing

Postman was used to test the API endpoints and ensure that all operations were successful. You can use Postman or any other API testing tool to send requests to the API endpoints and verify the functionality.
