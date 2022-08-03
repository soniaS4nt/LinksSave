require('dotenv').config();

const HOST = process.env.HOST || 'localhost';
const USER = process.env.USER || 'root';
const PASSWORD = process.env.PASSWORD || 'root';
const DATABASE = process.env.DATABASE || 'test';
const PORT = process.env.PORT || 3306;



module.exports = { HOST, USER, PASSWORD, DATABASE, PORT };    // export the config object
