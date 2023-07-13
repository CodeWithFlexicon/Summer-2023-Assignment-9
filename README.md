# Recipe Management System

This assignment is an API for managing a recipe management system. It allows users to perform CRUD (Create, Read, Update, Delete) operations on recipe data using Node.js, Express.js, PostgreSQL, and Sequelize.
Validation from Sequelize is implemented to make sure the user does not exceed text/string limits.

## Database Setup

This project uses PostgreSQL as the relational database management system and Sequelize as the ORM (Object-Relational Mapping) tool for interacting with the database.

### PostgreSQL

PostgreSQL is a powerful, open-source, and feature-rich database system. It provides reliability, flexibility, and excellent support for complex queries and data types.

To install PostgreSQL, follow the instructions below based on your operating system:

#### macOS

1. Install PostgreSQL using Homebrew package manager by running the following command in the terminal:
   ```
   brew install postgresql
   ```
2. Start the PostgreSQL service using the following command:
   ```
   brew services start postgresql
   ```

3. PostgreSQL should now be running on your system. You can interact with it using the `psql` command-line tool.

#### Windows

1. Download the PostgreSQL installer from the official website: https://www.postgresql.org/download/windows/

2. Run the downloaded installer and follow the installation wizard.

3. During the installation, you will be prompted to set a password for the default PostgreSQL user ("postgres"). Make sure to remember this password as you will need it later.

4. Complete the installation, and PostgreSQL will be installed on your system.

#### Linux (Ubuntu)

1. Open a terminal and run the following command to install PostgreSQL:
   ```
   sudo apt update
   sudo apt install postgresql
   ```

2. PostgreSQL should now be installed and running as a service on your system. You can interact with it using the `psql` command-line tool.

### Sequelize

Sequelize is a promise-based Node.js ORM for PostgreSQL and other databases. It provides an easy-to-use API for performing database operations and simplifies the process of connecting and interacting with the database.

To install Sequelize, navigate to your project folder and run the following command:

   ```
   npm install sequelize
   ```

Sequelize requires the `pg` package as the PostgreSQL driver. Install it by running:

   ```
   npm install pg
   ```

With PostgreSQL and Sequelize set up, you're ready to connect your application to the database and start performing CRUD operations.

Feel free to modify and expand this section based on your specific project requirements and any additional details you want to provide.

## Testing 

Postman was used to test the API endpoints and ensure that all operations were successful. You can use Postman or any other API testing tool to send requests to the API endpoints and verify the functionality.

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

