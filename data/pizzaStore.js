require('dotenv').config();
const Sequelize = require("sequelize");

const database = process.env.DB_DATABASE;
const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const dbClient = new Sequelize(
    database,
    username,
    password,
    {   
        host, 
        dialect: "postgres"
    }
);

const Pizza = dbClient.define("pizza", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        
},
    toppings: {
        type: Sequelize.STRING,
        
    },
    img: {
        type: Sequelize.STRING,
        
    },
    username: {
        type: Sequelize.STRING,
        
    },
})