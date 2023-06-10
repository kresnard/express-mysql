import dbPool from '../config/database.js'

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute( SQLQuery)
}

export default {getAllUsers};