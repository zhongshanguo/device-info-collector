const mysql = require('mysql');
const options = require('../config');

const readWriteConfig = {
    connectionLimit: 3,
    host: options.db_options.host,
    user: options.db_options.user,
    password: options.db_options.password,
    port: options.db_options.port,
    database: options.db_options.database,
    multipleStatements: true,
    charset: 'UTF8MB4_GENERAL_CI'
};

let Conn;
const Mysql = {
    getPool: () => {
        //确认读写数据库
        if (Conn) {
            return Conn;
        }
        else {
            Conn = mysql.createPool(readWriteConfig);
            console.log(new Date(), '已创建连接池');
        }
        return Conn;
    },
    //read
    fetch: (sql, ps) => {
        return new Promise((resolve, reject) => {
            let pool = Mysql.getPool();
            pool.getConnection((err, conn) => {
                conn.query(sql, ps, (e, v, f) => {
                    if (e) {
                        console.log(e);
                        reject(e);
                    } else {
                        resolve(v);
                    }
                    conn.release();
                });
            });
        });
    },
    //write
    execute: (sql, ps) => {
        let pool = Mysql.getPool();
        return new Promise((resolve, reject) => {
            pool.getConnection((err, conn) => {
                conn.query(sql, ps, (e, v, f) => {
                    if (e) {
                        reject(e);
                    } else {
                        resolve(v);
                    }
                    conn.release();
                });
            });
        });
    }
};

module.exports = Mysql;
