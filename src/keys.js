const { HOST,
        USER,
        PASSWORD,
        DATABASE } = require('./config');

module.exports = {
    database: {
        connectionLimit: 10,
        host: HOST,
        user: USER,
        password: PASSWORD,
        database: DATABASE
    }
}


 


