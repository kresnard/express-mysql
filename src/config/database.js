import mysql from 'mysql2'

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'express'
});


export default dbPool.promise();