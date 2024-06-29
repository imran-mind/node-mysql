const mysql = require('mysql2/promise');

class Database {
    constructor() {
        if (!Database.instance) {
            this.pool = mysql.createPool({
                host: 'localhost',
                user: 'root',
                database: 'task_app',
                password: 'root',
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0
            });
            Database.instance = this;
        }
        return Database.instance;
    }

    async getConnection() {
        try {
            return await this.pool.getConnection();
        } catch (error) {
            console.error('Error getting connection from the pool:', error);
            throw error;
        }
    }
}

module.exports = new Database();


// const mysql = require('mysql2/promise');

// const Database = () => {
//     let connection = null;
//     const dbConfig = {
//         host: '127.0.0.1',
//         port: 3306,
//         user: 'root',
//         password: 'root',
//         database: 'task_app'
//     }

//     async function connect() {
//         try {
//             if (!connection) {
//                 connection = await mysql.createConnection(dbConfig);
//                 console.log('Connected to MySQL Database');
//             }
//         } catch (err) {
//             console.error('Error connecting to MySQL database: ', err);
//             throw err;
//         }
//     }

//     async function disconnect() {
//         try {
//             if (connection) {
//                 await connection.end();
//                 console.log('Disconnected from MySQL database');
//                 connection = null;
//             }
//         } catch (err) {
//             console.error('Error disconnecting to MySQL database: ', err);
//             throw err;
//         }
//     }

//     function getConnection() {
//         if (connection) {
//             return connection
//         } else {
//             throw new Error('Connection is not established call connect() first');
//         }
//     }

//     return {
//         connect,
//         disconnect,
//         getConnection
//     }
// }

// module.exports = Database;

