import mysql from 'mysql';

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
});

pool.getConnection((err: any,connection: any) =>{
    if(err){
        throw err;
    }
    connection.release();
    console.log('DB is Connected');
});

export default pool;