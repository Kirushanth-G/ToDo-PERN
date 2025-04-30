const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: '3103Kiru',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

module.exports = pool; // Export the pool object to use it in other files